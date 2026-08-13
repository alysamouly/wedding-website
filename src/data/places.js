import { VENUE } from './site';

// ---------------------------------------------------------------------------
// Everything below is stored in real world coordinates as [longitude, latitude]
// and projected into SVG space at render time, so the maps stay geographically
// honest without pulling in a mapping library or tile server.
// ---------------------------------------------------------------------------

const DEG = Math.PI / 180;

export function makeProjection({ bounds, scale }) {
  const [[minLng, minLat], [maxLng, maxLat]] = bounds;
  const midLat = (minLat + maxLat) / 2;
  // Equirectangular, width corrected by cos(lat) so shapes keep their aspect.
  const kx = scale * Math.cos(midLat * DEG);

  const project = ([lng, lat]) => [(lng - minLng) * kx, (maxLat - lat) * scale];

  const line = (points) =>
    points
      .map(project)
      .map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`)
      .join(' ');

  return {
    width: (maxLng - minLng) * kx,
    height: (maxLat - minLat) * scale,
    project,
    line,
    area: (points) => `${line(points)}Z`,
    // Map units covering a given ground distance, for the scale bar.
    km: (km) => (km / 111.32) * scale,
  };
}

export const CATEGORIES = {
  venue: { label: 'The wedding', color: 'var(--clay)' },
  stay: { label: 'Where to stay', color: 'var(--brass)' },
  see: { label: 'See & do', color: 'var(--nile)' },
  travel: { label: 'Getting around', color: 'var(--ink-soft)' },
};

// --- Cairo -----------------------------------------------------------------

export const CAIRO = {
  id: 'cairo',
  label: 'Cairo',
  caption: 'Our venue, the hotels nearby and the city worth wandering into.',
  bounds: [
    [31.075, 29.945],
    [31.445, 30.145],
  ],
  scale: 3000,
  // The Nile as a closed polygon — west bank north, then east bank back south —
  // so the islands below sit inside real water instead of over a fat stroke.
  riverArea: [
    [31.243, 29.935],
    [31.24, 29.955],
    [31.233, 29.985],
    [31.2255, 30.005],
    [31.221, 30.02],
    [31.2175, 30.035],
    [31.212, 30.048],
    [31.211, 30.06],
    [31.213, 30.072],
    [31.216, 30.085],
    [31.2185, 30.098],
    [31.2245, 30.115],
    [31.232, 30.15],
    [31.244, 30.15],
    [31.236, 30.118],
    [31.23, 30.098],
    [31.2285, 30.082],
    [31.23, 30.068],
    [31.233, 30.055],
    [31.235, 30.04],
    [31.236, 30.025],
    [31.235, 30.008],
    [31.242, 29.988],
    [31.25, 29.958],
    [31.254, 29.935],
  ],
  islands: [
    // Gezira / Zamalek
    [
      [31.2185, 30.0425],
      [31.2245, 30.04],
      [31.2275, 30.048],
      [31.227, 30.06],
      [31.2235, 30.072],
      [31.2185, 30.074],
      [31.216, 30.065],
      [31.2165, 30.052],
    ],
    // Roda
    [
      [31.2255, 30.031],
      [31.231, 30.028],
      [31.2325, 30.017],
      [31.229, 30.0075],
      [31.225, 30.013],
      [31.224, 30.024],
    ],
  ],
  // Cairo's built-up footprint: one continuous mass hugging the river, reaching
  // west along Pyramids Road to the Giza plateau and east through the Katameya
  // corridor into New Cairo. Only the airport is left out in open desert.
  urban: [
    [
      [31.17, 30.1],
      [31.19, 30.12],
      [31.212, 30.132],
      [31.24, 30.14],
      [31.268, 30.136],
      [31.29, 30.122],
      [31.305, 30.108],
      [31.33, 30.1],
      [31.348, 30.088],
      [31.352, 30.068],
      // east through the corridor into New Cairo
      [31.362, 30.058],
      [31.385, 30.062],
      [31.405, 30.065],
      [31.428, 30.06],
      [31.443, 30.036],
      [31.436, 30.008],
      [31.402, 29.996],
      [31.368, 30.004],
      [31.352, 30.022],
      [31.336, 30.038],
      // back down the city's eastern desert edge
      [31.318, 30.028],
      [31.302, 30.008],
      [31.292, 29.985],
      [31.286, 29.965],
      [31.276, 29.946],
      [31.258, 29.938],
      [31.238, 29.942],
      [31.22, 29.955],
      // west along Pyramids Road, out to the plateau and the museum
      [31.2, 29.968],
      [31.178, 29.972],
      [31.155, 29.973],
      [31.13, 29.9705],
      [31.112, 29.974],
      [31.106, 29.99],
      [31.108, 30.004],
      [31.124, 30.012],
      [31.134, 30.024],
      [31.138, 30.036],
      [31.146, 30.042],
      [31.155, 30.062],
      [31.162, 30.08],
    ],
  ],
  labels: [
    { text: 'Giza', at: [31.167, 30.008] },
    { text: 'Mohandessin', at: [31.1815, 30.0765] },
    { text: 'Downtown', at: [31.2605, 30.0605] },
    { text: 'Islamic Cairo', at: [31.2825, 30.0345] },
    { text: 'Maadi', at: [31.269, 29.9625] },
    { text: 'New Cairo', at: [31.4045, 30.0325] },
    { text: 'Heliopolis', at: [31.3185, 30.0965] },
    { text: 'The Nile', at: [31.1955, 30.113], river: true },
  ],
  scaleBar: { km: 5 },
};

// --- Egypt -----------------------------------------------------------------

export const EGYPT = {
  id: 'egypt',
  label: 'Beyond Cairo',
  caption: 'Make a trip of it — the coast, the desert and the temples south.',
  bounds: [
    [24.4, 21.7],
    [37.2, 32.0],
  ],
  scale: 60,
  outline: [
    [25.0, 31.55],
    [26.2, 31.35],
    [27.3, 31.2],
    [28.45, 30.9],
    [29.05, 30.83],
    [29.9, 31.2],
    [30.4, 31.45],
    [31.1, 31.4],
    [31.55, 31.45],
    [32.3, 31.25],
    [33.2, 31.1],
    [34.25, 31.22],
    [34.55, 31.0],
    [34.9, 29.5],
    [34.66, 29.15],
    [34.33, 27.75],
    [33.6, 28.5],
    [33.2, 28.95],
    [32.9, 29.5],
    [32.55, 29.95],
    [32.6, 29.55],
    [33.2, 28.2],
    [33.6, 27.3],
    [34.2, 26.4],
    [34.9, 25.6],
    [35.55, 24.2],
    [36.2, 23.2],
    [36.9, 22.0],
    [31.5, 22.0],
    [25.0, 22.0],
  ],
  riverLine: [
    [32.87, 24.0],
    [32.75, 25.0],
    [32.64, 25.69],
    [32.4, 26.55],
    [31.8, 27.3],
    [31.2, 28.2],
    [30.85, 28.7],
    [30.78, 29.3],
    [31.1, 29.75],
    [31.23, 30.05],
  ],
  branches: [
    [
      [31.23, 30.05],
      [30.9, 30.6],
      [30.55, 31.1],
      [30.4, 31.45],
    ],
    [
      [31.23, 30.05],
      [31.55, 30.6],
      [31.75, 31.05],
      [31.85, 31.45],
    ],
    [
      [32.3, 31.25],
      [32.35, 30.6],
      [32.55, 30.0],
    ],
  ],
  lakes: [
    [
      [32.87, 24.03],
      [32.95, 23.6],
      [32.8, 23.1],
      [32.6, 22.6],
      [32.3, 22.2],
      [31.6, 22.0],
      [31.5, 22.1],
      [32.1, 22.45],
      [32.45, 22.9],
      [32.62, 23.4],
      [32.72, 23.85],
      [32.78, 24.03],
    ],
  ],
  labels: [
    { text: 'Mediterranean', at: [28.6, 31.72] },
    { text: 'Red Sea', at: [36.2, 26.4] },
    { text: 'Sinai', at: [33.95, 29.75] },
    { text: 'Western Desert', at: [27.4, 27.4] },
    { text: 'The Nile', at: [30.35, 27.4], river: true },
  ],
  scaleBar: { km: 200 },
};

// --- Places ----------------------------------------------------------------

export const PLACES = [
  {
    id: 'fairmont',
    map: 'cairo',
    category: 'venue',
    // Also surfaces under the "Where to stay" filter — it is the wedding hotel
    // and the room block — while keeping its venue colouring and pin.
    alsoIn: ['stay'],
    name: VENUE.fullName,
    meta: 'May 3 · Corniche El Nil · Our room block',
    blurb:
      'Where we are getting married, and where we would stay. The ceremony and reception both take place here, right on the water in Ramlet Beaulac, and we are holding a block of rooms for guests.',
    coords: VENUE.coords,
  },
  {
    id: 'sofitel',
    map: 'cairo',
    category: 'stay',
    name: 'Sofitel Cairo Nile El Gezirah',
    meta: 'Gezira Island',
    blurb: 'On the southern tip of Gezira with the Nile wrapped around three sides.',
    coords: [31.2244, 30.0345],
  },
  {
    id: 'ritz',
    map: 'cairo',
    category: 'stay',
    name: 'Nile Ritz-Carlton',
    meta: 'Downtown',
    blurb: 'Luxury on the river, a short walk from Tahrir and the old Egyptian Museum.',
    coords: [31.2333, 30.0444],
  },
  {
    id: 'marriott',
    map: 'cairo',
    category: 'stay',
    name: 'Cairo Marriott Hotel',
    meta: 'Zamalek',
    blurb: 'A converted 19th-century palace on Gezira Island, with gardens to match.',
    coords: [31.2231, 30.0578],
  },
  {
    id: 'ramses',
    map: 'cairo',
    category: 'stay',
    name: 'Ramses Hilton',
    meta: 'Downtown',
    blurb: 'Straightforward, central and well priced, with big views over the river.',
    coords: [31.2325, 30.053],
  },
  {
    id: 'pyramids',
    map: 'cairo',
    category: 'see',
    name: 'The Pyramids of Giza',
    meta: '45 min from the venue',
    blurb: 'The reason most people come. Go early in the morning to beat the heat and the crowds.',
    coords: [31.1342, 29.9792],
  },
  {
    id: 'gem',
    map: 'cairo',
    category: 'see',
    name: 'Grand Egyptian Museum',
    meta: 'Giza',
    blurb: 'The new museum beside the plateau — Tutankhamun’s full collection under one roof.',
    coords: [31.1194, 29.9938],
  },
  {
    id: 'ibn-tulun',
    map: 'cairo',
    category: 'see',
    name: 'Ibn Tulun Mosque',
    meta: 'Sayyida Zeinab',
    blurb: 'The oldest mosque in the city still in its original form, and gloriously quiet.',
    coords: [31.2496, 30.0288],
  },
  {
    id: 'gayer-anderson',
    map: 'cairo',
    category: 'see',
    name: 'Gayer-Anderson Museum',
    meta: 'Next to Ibn Tulun',
    blurb: 'Two joined Ottoman houses kept exactly as they were. Pair it with the mosque.',
    coords: [31.2508, 30.0278],
  },
  {
    id: 'khan',
    map: 'cairo',
    category: 'see',
    name: 'Khan El Khalili',
    meta: 'Islamic Cairo',
    blurb: 'The great market. Bring patience for the haggling and stop for mint tea.',
    coords: [31.2622, 30.0477],
  },
  {
    id: 'coptic',
    map: 'cairo',
    category: 'see',
    name: 'Coptic Cairo',
    meta: 'Old Cairo',
    blurb: 'Churches, the Hanging Church and Ben Ezra Synagogue in a few walkable lanes.',
    coords: [31.2295, 30.0056],
  },
  {
    id: 'fustat',
    map: 'cairo',
    category: 'see',
    name: 'Fustat Market',
    meta: 'Old Cairo',
    blurb: 'Craft workshops and pottery beside the oldest settlement in the city.',
    coords: [31.234, 30.0082],
  },
  {
    id: 'zamalek',
    map: 'cairo',
    category: 'see',
    name: 'Zamalek',
    meta: 'Gezira Island',
    blurb: 'Leafy streets, galleries, cafés and the best of the city’s restaurants.',
    coords: [31.2197, 30.0614],
  },
  {
    id: 'new-cairo',
    map: 'cairo',
    category: 'see',
    name: 'New Cairo',
    meta: 'East of the city',
    blurb: 'Modern malls and dining if you want air conditioning and a break from the traffic.',
    coords: [31.4085, 30.0295],
  },
  {
    id: 'cai',
    map: 'cairo',
    category: 'travel',
    name: 'Cairo International Airport',
    meta: 'CAI · 45–60 min to the venue',
    blurb: 'Everyone flies into here. Arrange a hotel transfer or a driver rather than a taxi.',
    coords: [31.4056, 30.1219],
  },

  {
    id: 'cairo-city',
    map: 'egypt',
    category: 'venue',
    name: 'Cairo',
    meta: 'Where the weekend happens',
    blurb: 'Base yourself here for the wedding, then head out in any direction afterwards.',
    coords: [31.2357, 30.0444],
  },
  {
    id: 'alexandria',
    map: 'egypt',
    category: 'see',
    name: 'Alexandria',
    meta: 'North · 3 hrs by road',
    blurb: 'The Mediterranean coast, the great library and seafood on the corniche.',
    coords: [29.9187, 31.2001],
  },
  {
    id: 'sharm',
    map: 'egypt',
    category: 'see',
    name: 'Sharm El Sheikh',
    meta: 'East · 1 hr flight',
    blurb: 'Resorts and reefs at the tip of Sinai. The easiest Red Sea add-on.',
    coords: [34.33, 27.9158],
  },
  {
    id: 'dahab',
    map: 'egypt',
    category: 'see',
    name: 'Dahab',
    meta: 'East · 1.5 hrs from Sharm',
    blurb: 'Quieter and barefoot, for diving the Blue Hole and doing very little else.',
    coords: [34.5136, 28.5091],
  },
  {
    id: 'luxor',
    map: 'egypt',
    category: 'see',
    name: 'Luxor',
    meta: 'South · 1 hr flight',
    blurb: 'Karnak, the Valley of the Kings and the best of Pharaonic Egypt.',
    coords: [32.6396, 25.6872],
  },
  {
    id: 'aswan',
    map: 'egypt',
    category: 'see',
    name: 'Aswan',
    meta: 'South · 1.5 hr flight',
    blurb: 'Nubian villages, Philae temple and the calmest stretch of the river.',
    coords: [32.8998, 24.0889],
  },
];

export const directionsUrl = ([lng, lat]) =>
  `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
