import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { loadScrollyteller, ScrollytellerDefinition } from '@abcnews/scrollyteller';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import type { Mount } from '@abcnews/mount-utils';
import React from 'react';
import { render } from 'react-dom';
import App, { MarkerData } from './components/App';
import type { AppProps } from './components/App';


let appMountEl: Mount;

function renderApp() {
  let name: number | null = 1;
  while (name) {
    try {
      let scrollyTellerDefinition: ScrollytellerDefinition<MarkerData> = loadScrollyteller(name.toString(), 'u-full');
      render(<App scrollyTellerDefinition={scrollyTellerDefinition} />, scrollyTellerDefinition.mountNode);
      name++;
    }
    catch {
      name = null;
    }
  }
}

whenOdysseyLoaded.then(() => {
  renderApp();
});

if (module.hot) {
  module.hot.accept('./components/App', () => {
    try {
      renderApp();
    } catch (err) {
      import('./components/ErrorBox').then(({ default: ErrorBox }) => {
        render(<ErrorBox error={err} />, appMountEl);
      });
    }
  });
}

if (process.env.NODE_ENV === 'development') {
  console.debug(`[aus-talks-local-indigenous-scrollyteller] public path: ${__webpack_public_path__}`);
}
