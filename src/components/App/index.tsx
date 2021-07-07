import React, { useState, useEffect, useRef } from 'react';
import Scrollyteller, { ScrollytellerDefinition } from '@abcnews/scrollyteller';
import styles from './styles.scss';
import { electorates } from '../../data/electorates';
import type { Electorate } from '../../data/electorates';
import maplibregl from 'maplibre-gl';

export type AppProps = {
  scrollyTellerDefinition: ScrollytellerDefinition<MarkerData>,
};

export type MarkerData = {
  electorate?: string | string[],
  background?: boolean,
};

type MapMarkerLookup = { [code: string]: maplibregl.Marker };

let markerElectorate = (name: string) => name.toLowerCase().replace(/[^\w]+/g, '');

const australiaAgree = 60.6;
let minAgree = 100;
let maxAgree = 0;

let electorateLookup: { [name: string]: Electorate } = {};
for (let electorate of electorates) {
  electorateLookup[electorate.name] = electorate;
  electorateLookup[markerElectorate(electorate.name)] = electorate;
  electorateLookup[markerElectorate(electorate.code)] = electorate;
  minAgree = Math.min(minAgree, electorate.agree);
  maxAgree = Math.max(maxAgree, electorate.agree);
};

let australiaBounds = new maplibregl.LngLatBounds([[112, -44], [156, -10]]); // Australia
let australiaCentre = australiaBounds.getCenter();

const App: React.FC<AppProps> = (props) => {
  let [activeElectorates, setActiveElectorates] = useState<string[]>([]);
  let [background, setBackground] = useState(true);
  let [map, setMap] = useState<maplibregl.Map | null>(null);
  let mapRef = useRef<null | HTMLDivElement>(null);
  let [initMapCalled, setInitMapCalled] = useState(false);
  let [mapMarkers, setMapMarkers] = useState<MapMarkerLookup>({});
  let onMarker = (marker: MarkerData) => {
    if (!marker.electorate) {
      setActiveElectorates([]);
    }
    else if (Array.isArray(marker.electorate)) {
      setActiveElectorates(marker.electorate)
    }
    else {
      setActiveElectorates([marker.electorate])
    }
    if (marker.background !== undefined) {
      setBackground(marker.background);
    }
  }
  let calculatePadding = (): maplibregl.PaddingOptions => {
    let padding = 5;
    if (mapRef.current) {
      let rect = mapRef.current.getBoundingClientRect();
      padding = Math.round(Math.min(rect.width, rect.height) * 0.1);
    }
    return {
      top: Math.max(padding, 70), // ensure there is enough room for a legend
      left: padding,
      right: padding,
      bottom: padding,
    };
  }
  let initMap = () => {
    if (mapRef.current && !initMapCalled) {
      setInitMapCalled(true);
      let css = 'https://unpkg.com/maplibre-gl@1.14.0-rc.1/dist/maplibre-gl.css';
      if (!document.head.querySelector(`link[href^="${css}"]`)) {
        let stylesheet = document.createElement('link');
        stylesheet.href = css;
        stylesheet.rel = 'stylesheet';
        document.head.appendChild(stylesheet);
      }
      let map = new maplibregl.Map({
        container: mapRef.current,
        attributionControl: false,
        center: australiaCentre,
        zoom: 6,
        scrollZoom: false,
        dragRotate: false,
        dragPan: false,
        touchZoomRotate: false,
        style: { version: 8, layers: [], sources: {} } // blank
      });
      setMap(map);
      map.fitBounds(australiaBounds, { padding: calculatePadding() });
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-left');
      map.on('load', () => {
        if (!map) return;
        map.addSource('electorates', {
          type: 'vector',
          tiles: [
            'https://www.abc.net.au/res/sites/news-projects/map-vector-tiles-federal-electorates-2019/{z}/{x}/{y}.pbf'
          ],
          minzoom: 0,
          maxzoom: 9,
          bounds: [96.816948, -43.658562, 167.998035, -9.219937],
          promoteId: {'federalelectorates2019': 'code'}
        });
        map.addLayer({
          id: 'electorates_fill',
          type: 'fill',
          source: 'electorates',
          'source-layer': 'federalelectorates2019',
          paint: {
            'fill-color': [
              'interpolate',
              ['linear'],
              ['feature-state', 'agree'],
              minAgree, '#4661cf',
              australiaAgree, '#ffffff',
              maxAgree, '#e87b07',
            ],
            'fill-opacity': 1
          }
        });
        map.addLayer({
          id: 'electorates_line',
          type: 'line',
          source: 'electorates',
          'source-layer': 'federalelectorates2019',
          paint: {
            'line-color': '#2e3638',
            'line-opacity': 1,
            "line-width": {
              stops: [[0, 0.5], [6, 0.5], [10, 1], [15, 2]]
            },
          }
        });
        let newMapMarkers: MapMarkerLookup = {};
        for (let e of electorates) {
          map.setFeatureState({
            source: 'electorates',
            sourceLayer: 'federalelectorates2019',
            id: e.code,
          }, {
            agree: e.agree,
            active: false,
          });
          let div = document.createElement('div');
          div.className = 'marker';
          div.hidden = true;
          div.innerHTML = `<div>${e.name}, ${e.state} (${e.agree.toFixed(0)}%)</div>`;
          let marker = new maplibregl.Marker(div);
          marker.setLngLat(new maplibregl.LngLat(e.longitude, e.latitude))
          marker.addTo(map);
          newMapMarkers[e.code] = marker;
        }
        setMapMarkers(newMapMarkers);
      });
      map.on('mousedown', e => {
        let features = map.queryRenderedFeatures(e.point, { layers: ['electorates_fill'] });
        if (features && features.length > 0) {
          let electorate = electorateLookup[features[0].id];
          if (electorate) {
            setActiveElectorates([electorate.code]);
          }
        }
      });
      map.on('touchend', e => {
        let features = map.queryRenderedFeatures(e.point, { layers: ['electorates_fill'] });
        if (features && features.length > 0) {
          let electorate = electorateLookup[features[0].id];
          if (electorate) {
            setActiveElectorates([electorate.code]);
          }
        }
      });
    }
  };
  useEffect(initMap, [mapRef]);
  let showElectorate = () => {
    if (!map) return;
    let activeElectorateCodes = new Set<string>();
    let combinedBounds: maplibregl.LngLatBounds | null = null;
    for (let name of activeElectorates) {
      let e = electorateLookup[name];
      if (e) {
        activeElectorateCodes.add(e.code);
        let eBounds = new maplibregl.LngLatBounds([[e.west, e.south], [e.east, e.north]]);
        if (!combinedBounds) {
          combinedBounds = eBounds;
        }
        else {
          combinedBounds.extend(eBounds);
        }
      }
    }
    for (let e of electorates) {
      let active = activeElectorateCodes.has(e.code);
      map.setFeatureState({ source: 'electorates', sourceLayer: 'federalelectorates2019', id: e.code }, { active });
      if (mapMarkers[e.code]) {
        mapMarkers[e.code].getElement().hidden = !active;
      }
    }
    if (!combinedBounds) {
      combinedBounds = australiaBounds;
    }
    map.fitBounds(combinedBounds, { padding: calculatePadding(), duration: 2500 });
  };
  useEffect(showElectorate, [activeElectorates]);
  return (
    <Scrollyteller panels={props.scrollyTellerDefinition.panels} onMarker={onMarker}>
      <div className={styles['aus-talks-local-indigenous-scrollyteller']} data-background={background ? 'true' : 'false'}>
        <div className="map" ref={mapRef} />
        <div className="legend">
          <span className="label">Less known</span>
          <span className="scale"></span>
          <span className="label">More known</span>
        </div>
        <div className="credits">Developer: Andrew Kesper. Electorate boundaries © AEC.</div>
      </div>
    </Scrollyteller>
  );
};

export default App;
