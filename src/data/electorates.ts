export type Electorate = {
  name: string,
  code: string,
  state: string,
  latitude: number,
  longitude: number,
  west: number,
  east: number,
  north: number,
  south: number,
  agree: number,
}

export const electorates: Electorate[] = [
	{
		name: "Adelaide",
		code: "adel",
		state: "SA",
		latitude: -34.9026,
		longitude: 138.589,
		west: 138.5467,
		east: 138.6382,
		north: -34.8468,
		south: -34.9672,
		agree: 77.29
	},
	{
		name: "Aston",
		code: "asto",
		state: "Vic",
		latitude: -37.889,
		longitude: 145.2586,
		west: 145.1909,
		east: 145.3476,
		north: -37.833,
		south: -37.964,
		agree: 44.63
	},
	{
		name: "Ballarat",
		code: "ball",
		state: "Vic",
		latitude: -37.5021,
		longitude: 144.0879,
		west: 143.5953,
		east: 144.5562,
		north: -37.1477,
		south: -37.8642,
		agree: 60.54
	},
	{
		name: "Banks",
		code: "bank",
		state: "NSW",
		latitude: -33.966,
		longitude: 151.047,
		west: 150.9707,
		east: 151.1297,
		north: -33.9397,
		south: -33.9959,
		agree: 47.88
	},
	{
		name: "Barker",
		code: "bark",
		state: "SA",
		latitude: -35.5383,
		longitude: 140.1827,
		west: 138.7441,
		east: 141.003,
		north: -33.3104,
		south: -38.0615,
		agree: 60.14
	},
	{
		name: "Barton",
		code: "bart",
		state: "NSW",
		latitude: -33.9409,
		longitude: 151.1274,
		west: 151.077,
		east: 151.1742,
		north: -33.9091,
		south: -33.9736,
		agree: 55.02
	},
	{
		name: "Bass",
		code: "bass",
		state: "Tas",
		latitude: -40.9146,
		longitude: 147.6011,
		west: 146.3807,
		east: 148.4819,
		north: -39.2068,
		south: -41.5562,
		agree: 35.87
	},
	{
		name: "Bean",
		code: "bean",
		state: "ACT",
		latitude: -35.549,
		longitude: 148.9635,
		west: 148.7627,
		east: 149.2063,
		north: -35.2185,
		south: -35.9208,
		agree: 83.57
	},
	{
		name: "Bendigo",
		code: "bend",
		state: "Vic",
		latitude: -36.9093,
		longitude: 144.3791,
		west: 143.8306,
		east: 144.8536,
		north: -36.3852,
		south: -37.4589,
		agree: 69.33
	},
	{
		name: "Bennelong",
		code: "benn",
		state: "NSW",
		latitude: -33.7945,
		longitude: 151.0986,
		west: 151.0473,
		east: 151.1591,
		north: -33.7518,
		south: -33.8431,
		agree: 52.34
	},
	{
		name: "Berowra",
		code: "bero",
		state: "NSW",
		latitude: -33.5693,
		longitude: 151.0472,
		west: 150.8697,
		east: 151.2848,
		north: -33.3781,
		south: -33.7697,
		agree: 54.89
	},
	{
		name: "Blair",
		code: "blai",
		state: "Qld",
		latitude: -27.1214,
		longitude: 152.4657,
		west: 152.0734,
		east: 152.9277,
		north: -26.4519,
		south: -27.8655,
		agree: 35.7
	},
	{
		name: "Blaxland",
		code: "blax",
		state: "NSW",
		latitude: -33.8964,
		longitude: 151.009,
		west: 150.966,
		east: 151.044,
		north: -33.8344,
		south: -33.9469,
		agree: 48.89
	},
	{
		name: "Bonner",
		code: "bonn",
		state: "Qld",
		latitude: -27.3327,
		longitude: 153.2689,
		west: 153.0558,
		east: 153.4685,
		north: -27.022,
		south: -27.6066,
		agree: 39.77
	},
	{
		name: "Boothby",
		code: "boot",
		state: "SA",
		latitude: -35.0021,
		longitude: 138.5843,
		west: 138.5037,
		east: 138.6813,
		north: -34.952,
		south: -35.0598,
		agree: 75.03
	},
	{
		name: "Bowman",
		code: "bowm",
		state: "Qld",
		latitude: -27.5686,
		longitude: 153.3608,
		west: 153.1715,
		east: 153.5467,
		north: -27.3879,
		south: -27.7408,
		agree: 52.69
	},
	{
		name: "Braddon",
		code: "brad",
		state: "Tas",
		latitude: -41.6518,
		longitude: 145.4449,
		west: 143.819,
		east: 146.7621,
		north: -39.5793,
		south: -43.322,
		agree: 33.92
	},
	{
		name: "Bradfield",
		code: "brfd",
		state: "NSW",
		latitude: -33.7348,
		longitude: 151.1505,
		west: 151.09,
		east: 151.2349,
		north: -33.6596,
		south: -33.7977,
		agree: 57.93
	},
	{
		name: "Brand",
		code: "bran",
		state: "WA",
		latitude: -32.3072,
		longitude: 115.8016,
		west: 115.6603,
		east: 115.9008,
		north: -32.1555,
		south: -32.4582,
		agree: 61.37
	},
	{
		name: "Brisbane",
		code: "bris",
		state: "Qld",
		latitude: -27.4389,
		longitude: 153.0304,
		west: 152.9753,
		east: 153.0999,
		north: -27.4041,
		south: -27.4807,
		agree: 47.6
	},
	{
		name: "Bruce",
		code: "bruc",
		state: "Vic",
		latitude: -37.9766,
		longitude: 145.2349,
		west: 145.1447,
		east: 145.317,
		north: -37.9325,
		south: -38.0437,
		agree: 42.25
	},
	{
		name: "Burt",
		code: "burt",
		state: "WA",
		latitude: -32.1165,
		longitude: 115.9621,
		west: 115.8843,
		east: 116.0535,
		north: -32.0295,
		south: -32.1869,
		agree: 61.33
	},
	{
		name: "Calare",
		code: "cala",
		state: "NSW",
		latitude: -33.0916,
		longitude: 149.478,
		west: 148.2902,
		east: 150.6197,
		north: -32.0581,
		south: -34.2057,
		agree: 76.25
	},
	{
		name: "Calwell",
		code: "calw",
		state: "Vic",
		latitude: -37.6136,
		longitude: 144.8925,
		west: 144.7976,
		east: 144.9777,
		north: -37.5022,
		south: -37.7276,
		agree: 52.83
	},
	{
		name: "Canberra",
		code: "canb",
		state: "ACT",
		latitude: -35.288,
		longitude: 149.1932,
		west: 149.0261,
		east: 149.3993,
		north: -35.2015,
		south: -35.3513,
		agree: 84.59
	},
	{
		name: "Canning",
		code: "cann",
		state: "WA",
		latitude: -32.6248,
		longitude: 116.1145,
		west: 115.6068,
		east: 116.6594,
		north: -32.0093,
		south: -33.0858,
		agree: 61.47
	},
	{
		name: "Capricornia",
		code: "capr",
		state: "Qld",
		latitude: -22.0552,
		longitude: 148.1903,
		west: 146.0315,
		east: 151.0817,
		north: -20.2945,
		south: -23.556,
		agree: 65.72
	},
	{
		name: "Casey",
		code: "case",
		state: "Vic",
		latitude: -37.7144,
		longitude: 145.6966,
		west: 145.2817,
		east: 146.1925,
		north: -37.5251,
		south: -37.975,
		agree: 49.47
	},
	{
		name: "Chifley",
		code: "chif",
		state: "NSW",
		latitude: -33.7303,
		longitude: 150.8372,
		west: 150.7596,
		east: 150.9063,
		north: -33.6501,
		south: -33.7979,
		agree: 52.97
	},
	{
		name: "Chisholm",
		code: "chis",
		state: "Vic",
		latitude: -37.8478,
		longitude: 145.1413,
		west: 145.0907,
		east: 145.2004,
		north: -37.7953,
		south: -37.893,
		agree: 46.57
	},
	{
		name: "Clark",
		code: "clar",
		state: "Tas",
		latitude: -42.8893,
		longitude: 147.2433,
		west: 147.1354,
		east: 147.362,
		north: -42.7504,
		south: -42.9863,
		agree: 53.62
	},
	{
		name: "Cook",
		code: "cook",
		state: "NSW",
		latitude: -34.0245,
		longitude: 151.144,
		west: 151.0768,
		east: 151.2319,
		north: -33.9643,
		south: -34.0778,
		agree: 55.08
	},
	{
		name: "Cooper",
		code: "coop",
		state: "Vic",
		latitude: -37.7376,
		longitude: 145.0129,
		west: 144.9662,
		east: 145.0754,
		north: -37.691,
		south: -37.8037,
		agree: 67
	},
	{
		name: "Corangamite",
		code: "cora",
		state: "Vic",
		latitude: -38.3245,
		longitude: 143.9161,
		west: 143.2473,
		east: 144.7202,
		north: -37.7958,
		south: -38.8577,
		agree: 65.6
	},
	{
		name: "Corio",
		code: "cori",
		state: "Vic",
		latitude: -37.9852,
		longitude: 144.366,
		west: 144.2025,
		east: 144.5919,
		north: -37.8011,
		south: -38.2146,
		agree: 64.66
	},
	{
		name: "Cowan",
		code: "cowa",
		state: "WA",
		latitude: -31.8023,
		longitude: 115.8707,
		west: 115.7737,
		east: 115.9672,
		north: -31.708,
		south: -31.8881,
		agree: 58.43
	},
	{
		name: "Cowper",
		code: "cowp",
		state: "NSW",
		latitude: -30.7626,
		longitude: 152.719,
		west: 152.2698,
		east: 153.1544,
		north: -30.1808,
		south: -31.493,
		agree: 73.77
	},
	{
		name: "Cunningham",
		code: "cunn",
		state: "NSW",
		latitude: -34.3212,
		longitude: 150.8679,
		west: 150.6896,
		east: 151.0662,
		north: -34.13,
		south: -34.5007,
		agree: 61.49
	},
	{
		name: "Curtin",
		code: "curt",
		state: "WA",
		latitude: -31.9543,
		longitude: 115.7901,
		west: 115.7502,
		east: 115.844,
		north: -31.8825,
		south: -32.0268,
		agree: 70.28
	},
	{
		name: "Dawson",
		code: "daws",
		state: "Qld",
		latitude: -20.2013,
		longitude: 147.9978,
		west: 146.761,
		east: 149.9114,
		north: -19.1818,
		south: -21.2126,
		agree: 52.93
	},
	{
		name: "Deakin",
		code: "deak",
		state: "Vic",
		latitude: -37.8142,
		longitude: 145.246,
		west: 145.1688,
		east: 145.3187,
		north: -37.7618,
		south: -37.8652,
		agree: 46.14
	},
	{
		name: "Dickson",
		code: "dick",
		state: "Qld",
		latitude: -27.2716,
		longitude: 152.8483,
		west: 152.6809,
		east: 153.0205,
		north: -27.0864,
		south: -27.4224,
		agree: 36.89
	},
	{
		name: "Dobell",
		code: "dobe",
		state: "NSW",
		latitude: -33.2476,
		longitude: 151.3692,
		west: 151.1992,
		east: 151.5793,
		north: -33.0437,
		south: -33.4294,
		agree: 69.15
	},
	{
		name: "Dunkley",
		code: "dunk",
		state: "Vic",
		latitude: -38.1438,
		longitude: 145.1615,
		west: 145.0612,
		east: 145.2396,
		north: -38.0674,
		south: -38.2249,
		agree: 44.79
	},
	{
		name: "Durack",
		code: "dura",
		state: "WA",
		latitude: -23.2023,
		longitude: 121.274,
		west: 112.9211,
		east: 129.0013,
		north: -13.7408,
		south: -32.2868,
		agree: 76.26
	},
	{
		name: "Eden-Monaro",
		code: "emon",
		state: "NSW",
		latitude: -36.0538,
		longitude: 149.0426,
		west: 147.6874,
		east: 150.2309,
		north: -34.5357,
		south: -37.5051,
		agree: 71.82
	},
	{
		name: "Fadden",
		code: "fadd",
		state: "Qld",
		latitude: -27.8148,
		longitude: 153.3418,
		west: 153.2127,
		east: 153.4454,
		north: -27.6919,
		south: -27.9768,
		agree: 33.82
	},
	{
		name: "Fairfax",
		code: "fair",
		state: "Qld",
		latitude: -26.5831,
		longitude: 152.8856,
		west: 152.5509,
		east: 153.12,
		north: -26.432,
		south: -26.7336,
		agree: 60.13
	},
	{
		name: "Farrer",
		code: "farr",
		state: "NSW",
		latitude: -34.3586,
		longitude: 144.4621,
		west: 141.0017,
		east: 147.8976,
		north: -32.6713,
		south: -36.1299,
		agree: 72.89
	},
	{
		name: "Fenner",
		code: "fenn",
		state: "ACT",
		latitude: -35.1851,
		longitude: 149.5403,
		west: 148.9613,
		east: 150.7728,
		north: -35.1123,
		south: -35.2805,
		agree: 83.26
	},
	{
		name: "Fisher",
		code: "fish",
		state: "Qld",
		latitude: -26.7861,
		longitude: 152.9001,
		west: 152.5821,
		east: 153.1514,
		north: -26.6162,
		south: -26.9848,
		agree: 54.64
	},
	{
		name: "Flinders",
		code: "flin",
		state: "Vic",
		latitude: -38.3465,
		longitude: 145.1165,
		west: 144.6514,
		east: 145.5026,
		north: -38.1816,
		south: -38.4994,
		agree: 52.86
	},
	{
		name: "Flynn",
		code: "flyn",
		state: "Qld",
		latitude: -24.4994,
		longitude: 149.6671,
		west: 146.5725,
		east: 152.3967,
		north: -22.6543,
		south: -26.4788,
		agree: 46.54
	},
	{
		name: "Forde",
		code: "ford",
		state: "Qld",
		latitude: -27.7618,
		longitude: 153.1806,
		west: 152.987,
		east: 153.3146,
		north: -27.6342,
		south: -27.9191,
		agree: 34.37
	},
	{
		name: "Forrest",
		code: "forr",
		state: "WA",
		latitude: -33.7666,
		longitude: 115.6273,
		west: 114.9747,
		east: 116.2398,
		north: -32.9207,
		south: -34.4854,
		agree: 67.69
	},
	{
		name: "Fowler",
		code: "fowl",
		state: "NSW",
		latitude: -33.8939,
		longitude: 150.921,
		west: 150.8435,
		east: 150.9855,
		north: -33.8511,
		south: -33.9391,
		agree: 49.02
	},
	{
		name: "Franklin",
		code: "fran",
		state: "Tas",
		latitude: -43.2339,
		longitude: 146.6977,
		west: 145.9151,
		east: 147.6132,
		north: -42.7612,
		south: -43.6586,
		agree: 44.02
	},
	{
		name: "Fraser",
		code: "fras",
		state: "Vic",
		latitude: -37.7494,
		longitude: 144.8063,
		west: 144.7444,
		east: 144.8659,
		north: -37.6629,
		south: -37.8228,
		agree: 52.63
	},
	{
		name: "Fremantle",
		code: "frem",
		state: "WA",
		latitude: -32.1053,
		longitude: 115.7895,
		west: 115.4495,
		east: 115.9162,
		north: -31.9873,
		south: -32.1814,
		agree: 69.34
	},
	{
		name: "Gellibrand",
		code: "gell",
		state: "Vic",
		latitude: -37.8589,
		longitude: 144.8107,
		west: 144.7169,
		east: 144.9165,
		north: -37.7945,
		south: -37.9413,
		agree: 55.21
	},
	{
		name: "Gilmore",
		code: "gilm",
		state: "NSW",
		latitude: -35.2429,
		longitude: 150.3114,
		west: 149.8144,
		east: 150.8654,
		north: -34.5989,
		south: -36.0669,
		agree: 59.89
	},
	{
		name: "Gippsland",
		code: "gipp",
		state: "Vic",
		latitude: -37.5954,
		longitude: 147.7557,
		west: 146.2105,
		east: 149.9767,
		north: -36.6124,
		south: -38.7909,
		agree: 66.19
	},
	{
		name: "Goldstein",
		code: "gold",
		state: "Vic",
		latitude: -37.9326,
		longitude: 145.0217,
		west: 144.9834,
		east: 145.0553,
		north: -37.8833,
		south: -37.9964,
		agree: 42.69
	},
	{
		name: "Gorton",
		code: "gort",
		state: "Vic",
		latitude: -37.6951,
		longitude: 144.6294,
		west: 144.4777,
		east: 144.7794,
		north: -37.5524,
		south: -37.812,
		agree: 43.56
	},
	{
		name: "Grayndler",
		code: "gray",
		state: "NSW",
		latitude: -33.883,
		longitude: 151.1594,
		west: 151.1175,
		east: 151.1987,
		north: -33.8442,
		south: -33.925,
		agree: 73.01
	},
	{
		name: "Greenway",
		code: "gree",
		state: "NSW",
		latitude: -33.7315,
		longitude: 150.9111,
		west: 150.851,
		east: 150.9669,
		north: -33.6463,
		south: -33.8116,
		agree: 58.21
	},
	{
		name: "Grey",
		code: "grey",
		state: "SA",
		latitude: -29.7031,
		longitude: 135.4873,
		west: 129.0013,
		east: 141.0024,
		north: -25.9961,
		south: -35.3782,
		agree: 69.47
	},
	{
		name: "Griffith",
		code: "grif",
		state: "Qld",
		latitude: -27.4853,
		longitude: 153.0628,
		west: 152.9954,
		east: 153.1067,
		north: -27.4408,
		south: -27.5318,
		agree: 51.82
	},
	{
		name: "Groom",
		code: "groo",
		state: "Qld",
		latitude: -27.4844,
		longitude: 151.6536,
		west: 151.0766,
		east: 152.1531,
		north: -26.9678,
		south: -27.9074,
		agree: 34.32
	},
	{
		name: "Hasluck",
		code: "hasl",
		state: "WA",
		latitude: -31.8765,
		longitude: 116.1967,
		west: 115.9412,
		east: 116.4151,
		north: -31.6705,
		south: -32.0657,
		agree: 61.85
	},
	{
		name: "Herbert",
		code: "herb",
		state: "Qld",
		latitude: -19.209,
		longitude: 146.6163,
		west: 146.4004,
		east: 146.8837,
		north: -18.5378,
		south: -19.4163,
		agree: 55.31
	},
	{
		name: "Higgins",
		code: "higg",
		state: "Vic",
		latitude: -37.8662,
		longitude: 145.0497,
		west: 144.9842,
		east: 145.0956,
		north: -37.8297,
		south: -37.9095,
		agree: 50.33
	},
	{
		name: "Hindmarsh",
		code: "hind",
		state: "SA",
		latitude: -34.8683,
		longitude: 138.5193,
		west: 138.4758,
		east: 138.5754,
		north: -34.7564,
		south: -34.9759,
		agree: 72.09
	},
	{
		name: "Hinkler",
		code: "hink",
		state: "Qld",
		latitude: -25.2026,
		longitude: 152.414,
		west: 151.9821,
		east: 152.9937,
		north: -24.7576,
		south: -25.5105,
		agree: 49.02
	},
	{
		name: "Holt",
		code: "holt",
		state: "Vic",
		latitude: -38.1483,
		longitude: 145.3024,
		west: 145.2149,
		east: 145.4306,
		north: -38.017,
		south: -38.2485,
		agree: 37.6
	},
	{
		name: "Hotham",
		code: "hoth",
		state: "Vic",
		latitude: -37.9204,
		longitude: 145.1318,
		west: 145.0483,
		east: 145.22,
		north: -37.8803,
		south: -37.9836,
		agree: 35.13
	},
	{
		name: "Hughes",
		code: "hugh",
		state: "NSW",
		latitude: -34.0615,
		longitude: 151.0158,
		west: 150.8861,
		east: 151.1718,
		north: -33.9269,
		south: -34.1723,
		agree: 61.34
	},
	{
		name: "Hume",
		code: "hume",
		state: "NSW",
		latitude: -34.4438,
		longitude: 149.6642,
		west: 148.5536,
		east: 150.8981,
		north: -33.8418,
		south: -35.2563,
		agree: 53.71
	},
	{
		name: "Hunter",
		code: "hunt",
		state: "NSW",
		latitude: -32.658,
		longitude: 150.925,
		west: 150.2264,
		east: 151.6653,
		north: -32.13,
		south: -33.2028,
		agree: 63.98
	},
	{
		name: "Indi",
		code: "indi",
		state: "Vic",
		latitude: -36.738,
		longitude: 146.6046,
		west: 145.1627,
		east: 148.2207,
		north: -35.9285,
		south: -37.6294,
		agree: 61.41
	},
	{
		name: "Isaacs",
		code: "isaa",
		state: "Vic",
		latitude: -38.0151,
		longitude: 145.1495,
		west: 145.0344,
		east: 145.2519,
		north: -37.933,
		south: -38.085,
		agree: 40.9
	},
	{
		name: "Jagajaga",
		code: "jaga",
		state: "Vic",
		latitude: -37.7063,
		longitude: 145.1103,
		west: 145.0278,
		east: 145.211,
		north: -37.6305,
		south: -37.7851,
		agree: 57.45
	},
	{
		name: "Kennedy",
		code: "kenn",
		state: "Qld",
		latitude: -19.6635,
		longitude: 142.0829,
		west: 137.996,
		east: 147.3477,
		north: -15.8378,
		south: -23.6936,
		agree: 62.68
	},
	{
		name: "Kingsford Smith",
		code: "ksmi",
		state: "NSW",
		latitude: -33.9589,
		longitude: 151.2105,
		west: 151.1482,
		east: 151.2682,
		north: -33.9009,
		south: -34.0167,
		agree: 60.36
	},
	{
		name: "Kingston",
		code: "king",
		state: "SA",
		latitude: -35.1198,
		longitude: 138.5335,
		west: 138.462,
		east: 138.628,
		north: -35.0233,
		south: -35.2474,
		agree: 70.01
	},
	{
		name: "Kooyong",
		code: "kooy",
		state: "Vic",
		latitude: -37.8127,
		longitude: 145.0647,
		west: 144.9993,
		east: 145.1185,
		north: -37.7769,
		south: -37.8504,
		agree: 53.38
	},
	{
		name: "La Trobe",
		code: "ltro",
		state: "Vic",
		latitude: -38.014,
		longitude: 145.5093,
		west: 145.3035,
		east: 145.7649,
		north: -37.8577,
		south: -38.1632,
		agree: 38.41
	},
	{
		name: "Lalor",
		code: "lalo",
		state: "Vic",
		latitude: -37.8878,
		longitude: 144.6036,
		west: 144.4441,
		east: 144.7692,
		north: -37.781,
		south: -38.0046,
		agree: 50.27
	},
	{
		name: "Leichhardt",
		code: "leic",
		state: "Qld",
		latitude: -14.3708,
		longitude: 143.1238,
		west: 141.4157,
		east: 145.7823,
		north: -9.2199,
		south: -17.045,
		agree: 59.24
	},
	{
		name: "Lilley",
		code: "lill",
		state: "Qld",
		latitude: -27.3767,
		longitude: 153.0734,
		west: 152.9752,
		east: 153.1604,
		north: -27.2768,
		south: -27.4453,
		agree: 40.94
	},
	{
		name: "Lindsay",
		code: "lind",
		state: "NSW",
		latitude: -33.7507,
		longitude: 150.7106,
		west: 150.588,
		east: 150.8124,
		north: -33.6123,
		south: -33.8757,
		agree: 55.02
	},
	{
		name: "Lingiari",
		code: "ling",
		state: "NT",
		latitude: -19.5566,
		longitude: 133.3696,
		west: 129.0004,
		east: 138.0012,
		north: -10.9659,
		south: -25.9995,
		agree: 86.87
	},
	{
		name: "Longman",
		code: "long",
		state: "Qld",
		latitude: -27.0139,
		longitude: 152.8944,
		west: 152.6512,
		east: 153.2076,
		north: -26.7922,
		south: -27.2503,
		agree: 38.88
	},
	{
		name: "Lyne",
		code: "lyne",
		state: "NSW",
		latitude: -31.9633,
		longitude: 152.0962,
		west: 151.3037,
		east: 152.9152,
		north: -31.114,
		south: -32.7605,
		agree: 69.67
	},
	{
		name: "Lyons",
		code: "lyon",
		state: "Tas",
		latitude: -42.1185,
		longitude: 147.0854,
		west: 145.8325,
		east: 148.3591,
		north: -40.8992,
		south: -43.2466,
		agree: 32.19
	},
	{
		name: "Macarthur",
		code: "maca",
		state: "NSW",
		latitude: -34.0714,
		longitude: 150.8276,
		west: 150.7228,
		east: 150.9408,
		north: -33.9399,
		south: -34.1896,
		agree: 54.71
	},
	{
		name: "Mackellar",
		code: "mack",
		state: "NSW",
		latitude: -33.6691,
		longitude: 151.2525,
		west: 151.1608,
		east: 151.3429,
		north: -33.5719,
		south: -33.7731,
		agree: 55.42
	},
	{
		name: "Macnamara",
		code: "macn",
		state: "Vic",
		latitude: -37.8522,
		longitude: 144.9729,
		west: 144.8971,
		east: 145.0496,
		north: -37.8191,
		south: -37.8917,
		agree: 53.37
	},
	{
		name: "Macquarie",
		code: "macq",
		state: "NSW",
		latitude: -33.476,
		longitude: 150.6412,
		west: 150.166,
		east: 151.1358,
		north: -32.9961,
		south: -33.9634,
		agree: 69.66
	},
	{
		name: "Makin",
		code: "maki",
		state: "SA",
		latitude: -34.802,
		longitude: 138.6679,
		west: 138.5476,
		east: 138.7802,
		north: -34.7343,
		south: -34.8499,
		agree: 63.18
	},
	{
		name: "Mallee",
		code: "mall",
		state: "Vic",
		latitude: -35.8559,
		longitude: 142.3821,
		west: 140.9617,
		east: 144.4181,
		north: -33.9804,
		south: -37.4499,
		agree: 64.13
	},
	{
		name: "Maranoa",
		code: "mara",
		state: "Qld",
		latitude: -25.8534,
		longitude: 144.7387,
		west: 137.9982,
		east: 152.4926,
		north: -21.3087,
		south: -29.1779,
		agree: 45.65
	},
	{
		name: "Maribyrnong",
		code: "mari",
		state: "Vic",
		latitude: -37.7547,
		longitude: 144.8901,
		west: 144.8286,
		east: 144.9404,
		north: -37.6939,
		south: -37.802,
		agree: 52.65
	},
	{
		name: "Mayo",
		code: "mayo",
		state: "SA",
		latitude: -35.5412,
		longitude: 138.0088,
		west: 136.5329,
		east: 139.1583,
		north: -34.6805,
		south: -36.0749,
		agree: 74.73
	},
	{
		name: "McEwen",
		code: "mcew",
		state: "Vic",
		latitude: -37.4407,
		longitude: 144.9213,
		west: 144.4578,
		east: 145.3664,
		north: -37.2009,
		south: -37.7188,
		agree: 51.97
	},
	{
		name: "McMahon",
		code: "mcma",
		state: "NSW",
		latitude: -33.8336,
		longitude: 150.8652,
		west: 150.7586,
		east: 150.9971,
		north: -33.7768,
		south: -33.8857,
		agree: 54.21
	},
	{
		name: "McPherson",
		code: "mcph",
		state: "Qld",
		latitude: -28.1476,
		longitude: 153.3986,
		west: 153.2943,
		east: 153.5522,
		north: -28.031,
		south: -28.2503,
		agree: 46.1
	},
	{
		name: "Melbourne",
		code: "melb",
		state: "Vic",
		latitude: -37.8048,
		longitude: 144.9644,
		west: 144.9055,
		east: 145.0283,
		north: -37.7735,
		south: -37.8345,
		agree: 69.86
	},
	{
		name: "Menzies",
		code: "menz",
		state: "Vic",
		latitude: -37.7403,
		longitude: 145.1952,
		west: 145.0671,
		east: 145.2939,
		north: -37.6568,
		south: -37.8118,
		agree: 55.46
	},
	{
		name: "Mitchell",
		code: "mitc",
		state: "NSW",
		latitude: -33.7111,
		longitude: 150.9592,
		west: 150.874,
		east: 151.0311,
		north: -33.6118,
		south: -33.7966,
		agree: 47.52
	},
	{
		name: "Monash",
		code: "mona",
		state: "Vic",
		latitude: -38.29,
		longitude: 146.0197,
		west: 145.1163,
		east: 146.5873,
		north: -37.5799,
		south: -39.1473,
		agree: 53.39
	},
	{
		name: "Moncrieff",
		code: "monc",
		state: "Qld",
		latitude: -28.0058,
		longitude: 153.3828,
		west: 153.2858,
		east: 153.4476,
		north: -27.9339,
		south: -28.0766,
		agree: 33.09
	},
	{
		name: "Moore",
		code: "moor",
		state: "WA",
		latitude: -31.7786,
		longitude: 115.7626,
		west: 115.7066,
		east: 115.8168,
		north: -31.7119,
		south: -31.8473,
		agree: 61.96
	},
	{
		name: "Moreton",
		code: "more",
		state: "Qld",
		latitude: -27.5628,
		longitude: 153.0325,
		west: 152.962,
		east: 153.1111,
		north: -27.4998,
		south: -27.6182,
		agree: 45.22
	},
	{
		name: "New England",
		code: "neng",
		state: "NSW",
		latitude: -30.4685,
		longitude: 151.2793,
		west: 149.7916,
		east: 152.6314,
		north: -28.2492,
		south: -32.4088,
		agree: 71.31
	},
	{
		name: "Newcastle",
		code: "newc",
		state: "NSW",
		latitude: -32.8918,
		longitude: 151.7089,
		west: 151.6008,
		east: 151.8101,
		north: -32.8231,
		south: -32.9629,
		agree: 75.43
	},
	{
		name: "Nicholls",
		code: "nich",
		state: "Vic",
		latitude: -36.4259,
		longitude: 145.162,
		west: 144.2593,
		east: 146.2465,
		north: -35.802,
		south: -37.2941,
		agree: 62.95
	},
	{
		name: "North Sydney",
		code: "nsyd",
		state: "NSW",
		latitude: -33.8206,
		longitude: 151.1846,
		west: 151.1267,
		east: 151.2352,
		north: -33.7852,
		south: -33.8545,
		agree: 64.95
	},
	{
		name: "O'Connor",
		code: "ocon",
		state: "WA",
		latitude: -29.6717,
		longitude: 123.8207,
		west: 115.6745,
		east: 129.0019,
		north: -23.4319,
		south: -35.1348,
		agree: 70.87
	},
	{
		name: "Oxley",
		code: "oxle",
		state: "Qld",
		latitude: -27.6083,
		longitude: 152.9338,
		west: 152.8529,
		east: 153.0252,
		north: -27.5268,
		south: -27.6866,
		agree: 36.49
	},
	{
		name: "Page",
		code: "page",
		state: "NSW",
		latitude: -29.3385,
		longitude: 152.8563,
		west: 152.1683,
		east: 153.5445,
		north: -28.2697,
		south: -30.4189,
		agree: 74.67
	},
	{
		name: "Parkes",
		code: "park",
		state: "NSW",
		latitude: -30.9487,
		longitude: 145.5699,
		west: 140.9995,
		east: 150.8906,
		north: -28.5372,
		south: -33.6072,
		agree: 78.65
	},
	{
		name: "Parramatta",
		code: "parr",
		state: "NSW",
		latitude: -33.8079,
		longitude: 151.0094,
		west: 150.9476,
		east: 151.0663,
		north: -33.7665,
		south: -33.8537,
		agree: 54.65
	},
	{
		name: "Paterson",
		code: "pate",
		state: "NSW",
		latitude: -32.7644,
		longitude: 151.7526,
		west: 151.3958,
		east: 152.2049,
		north: -32.6358,
		south: -32.8816,
		agree: 62.91
	},
	{
		name: "Pearce",
		code: "pear",
		state: "WA",
		latitude: -31.6362,
		longitude: 116.306,
		west: 115.2627,
		east: 117.2472,
		north: -30.8917,
		south: -32.3577,
		agree: 64.33
	},
	{
		name: "Perth",
		code: "pert",
		state: "WA",
		latitude: -31.9207,
		longitude: 115.8908,
		west: 115.818,
		east: 115.9643,
		north: -31.8654,
		south: -31.9912,
		agree: 74.84
	},
	{
		name: "Petrie",
		code: "petr",
		state: "Qld",
		latitude: -27.2463,
		longitude: 153.0387,
		west: 152.9775,
		east: 153.119,
		north: -27.1478,
		south: -27.3653,
		agree: 38.94
	},
	{
		name: "Rankin",
		code: "rank",
		state: "Qld",
		latitude: -27.6423,
		longitude: 153.0943,
		west: 153.0149,
		east: 153.1836,
		north: -27.5873,
		south: -27.7002,
		agree: 28.45
	},
	{
		name: "Reid",
		code: "reid",
		state: "NSW",
		latitude: -33.8548,
		longitude: 151.0928,
		west: 151.0298,
		east: 151.1648,
		north: -33.8195,
		south: -33.8927,
		agree: 50.32
	},
	{
		name: "Richmond",
		code: "rich",
		state: "NSW",
		latitude: -28.4788,
		longitude: 153.4116,
		west: 153.1067,
		east: 153.6386,
		north: -28.157,
		south: -28.9249,
		agree: 76.05
	},
	{
		name: "Riverina",
		code: "rive",
		state: "NSW",
		latitude: -34.1749,
		longitude: 147.6535,
		west: 146.0703,
		east: 149.2578,
		north: -32.369,
		south: -35.5759,
		agree: 83.17
	},
	{
		name: "Robertson",
		code: "robe",
		state: "NSW",
		latitude: -33.3825,
		longitude: 151.213,
		west: 150.9841,
		east: 151.4526,
		north: -33.11,
		south: -33.5823,
		agree: 62.1
	},
	{
		name: "Ryan",
		code: "ryan",
		state: "Qld",
		latitude: -27.4599,
		longitude: 152.8636,
		west: 152.6797,
		east: 153.0217,
		north: -27.3185,
		south: -27.6025,
		agree: 50.31
	},
	{
		name: "Scullin",
		code: "scul",
		state: "Vic",
		latitude: -37.647,
		longitude: 145.0339,
		west: 144.9467,
		east: 145.1233,
		north: -37.599,
		south: -37.7,
		agree: 53.53
	},
	{
		name: "Shortland",
		code: "shor",
		state: "NSW",
		latitude: -33.0888,
		longitude: 151.6207,
		west: 151.5076,
		east: 151.7379,
		north: -32.9294,
		south: -33.2473,
		agree: 70.74
	},
	{
		name: "Solomon",
		code: "solo",
		state: "NT",
		latitude: -12.4322,
		longitude: 130.9094,
		west: 130.8151,
		east: 131.0007,
		north: -12.3301,
		south: -12.5413,
		agree: 88.81
	},
	{
		name: "Spence",
		code: "spen",
		state: "SA",
		latitude: -34.6817,
		longitude: 138.6707,
		west: 138.4361,
		east: 138.848,
		north: -34.5507,
		south: -34.7918,
		agree: 66.36
	},
	{
		name: "Stirling",
		code: "stir",
		state: "WA",
		latitude: -31.8753,
		longitude: 115.8233,
		west: 115.7508,
		east: 115.8975,
		north: -31.8423,
		south: -31.9143,
		agree: 64.69
	},
	{
		name: "Sturt",
		code: "stur",
		state: "SA",
		latitude: -34.8976,
		longitude: 138.6692,
		west: 138.6128,
		east: 138.7565,
		north: -34.8371,
		south: -34.9762,
		agree: 72.16
	},
	{
		name: "Swan",
		code: "swan",
		state: "WA",
		latitude: -31.9749,
		longitude: 115.9298,
		west: 115.8381,
		east: 116.0184,
		north: -31.9159,
		south: -32.0354,
		agree: 68.15
	},
	{
		name: "Sydney",
		code: "sydn",
		state: "NSW",
		latitude: -33.8859,
		longitude: 151.2004,
		west: 151.1715,
		east: 151.2308,
		north: -33.8498,
		south: -33.9243,
		agree: 74.84
	},
	{
		name: "Tangney",
		code: "tang",
		state: "WA",
		latitude: -32.0419,
		longitude: 115.8517,
		west: 115.7759,
		east: 115.9412,
		north: -31.9912,
		south: -32.0876,
		agree: 63.93
	},
	{
		name: "Wannon",
		code: "wann",
		state: "Vic",
		latitude: -37.7985,
		longitude: 142.4863,
		west: 140.9657,
		east: 143.938,
		north: -36.8687,
		south: -38.7729,
		agree: 59.41
	},
	{
		name: "Warringah",
		code: "warr",
		state: "NSW",
		latitude: -33.7982,
		longitude: 151.2563,
		west: 151.2036,
		east: 151.3076,
		north: -33.7514,
		south: -33.8573,
		agree: 58.05
	},
	{
		name: "Watson",
		code: "wats",
		state: "NSW",
		latitude: -33.908,
		longitude: 151.0745,
		west: 151.0356,
		east: 151.1324,
		north: -33.8628,
		south: -33.9437,
		agree: 54.27
	},
	{
		name: "Wentworth",
		code: "went",
		state: "NSW",
		latitude: -33.8761,
		longitude: 151.2559,
		west: 151.215,
		east: 151.2907,
		north: -33.8236,
		south: -33.9148,
		agree: 67.44
	},
	{
		name: "Werriwa",
		code: "werr",
		state: "NSW",
		latitude: -33.9285,
		longitude: 150.8244,
		west: 150.7047,
		east: 150.9189,
		north: -33.8694,
		south: -34.021,
		agree: 56.89
	},
	{
		name: "Whitlam",
		code: "whit",
		state: "NSW",
		latitude: -34.5226,
		longitude: 150.5818,
		west: 150.2266,
		east: 150.9043,
		north: -34.3197,
		south: -34.7055,
		agree: 52.91
	},
	{
		name: "Wide Bay",
		code: "wbay",
		state: "Qld",
		latitude: -25.9265,
		longitude: 152.5545,
		west: 151.7194,
		east: 153.3602,
		north: -24.697,
		south: -26.5977,
		agree: 57.62
	},
	{
		name: "Wills",
		code: "will",
		state: "Vic",
		latitude: -37.7306,
		longitude: 144.9489,
		west: 144.898,
		east: 144.9869,
		north: -37.6909,
		south: -37.7802,
		agree: 64.34
	},
	{
		name: "Wright",
		code: "wrig",
		state: "Qld",
		latitude: -27.9179,
		longitude: 152.6745,
		west: 151.9421,
		east: 153.3701,
		north: -27.3852,
		south: -28.3639,
		agree: 39.67
	}
];