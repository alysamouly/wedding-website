import { useMemo, useRef, useState } from 'react';
import './ExploreMap.css';
import {
  CAIRO,
  CATEGORIES,
  EGYPT,
  PLACES,
  directionsUrl,
  makeProjection,
} from '../data/places';

const MAPS = [CAIRO, EGYPT];

const Arrow = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
    <path
      d="M0 4h12M9 1l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExploreMap = () => {
  const [mapId, setMapId] = useState(CAIRO.id);
  const [filter, setFilter] = useState('all');
  const [selectedId, setSelectedId] = useState('fairmont');
  const [hoverId, setHoverId] = useState(null);
  const itemRefs = useRef({});

  const geo = useMemo(() => MAPS.find((m) => m.id === mapId), [mapId]);
  const proj = useMemo(() => makeProjection(geo), [geo]);

  const onMap = useMemo(() => PLACES.filter((place) => place.map === mapId), [mapId]);

  const categories = useMemo(() => {
    const used = [...new Set(onMap.map((place) => place.category))];
    return used.map((key) => ({ key, ...CATEGORIES[key] }));
  }, [onMap]);

  const visible = useMemo(
    () => (filter === 'all' ? onMap : onMap.filter((place) => place.category === filter)),
    [onMap, filter],
  );

  // Derived, not synced: a deliberate collapse stays collapsed, and if a filter
  // hides the selected place we fall back to the first one still on screen.
  const activeId = useMemo(() => {
    if (selectedId === null) return null;
    return visible.some((place) => place.id === selectedId) ? selectedId : (visible[0]?.id ?? null);
  }, [selectedId, visible]);

  const switchMap = (id) => {
    setMapId(id);
    setFilter('all');
    setHoverId(null);
    setSelectedId(PLACES.find((place) => place.map === id)?.id ?? null);
  };

  const select = (id, { scrollList = false } = {}) => {
    setSelectedId(id);
    if (scrollList) {
      itemRefs.current[id]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  };

  const u = proj.width / 100; // one map unit ≈ 1% of the map width, so pins scale with the view

  return (
    <section id="map" className="section section--sand explore">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">The map</span>
          <h2 className="section-title">
            Things to <span className="script-font">Do</span>
          </h2>
          <p className="lede">
            Where everything sits — the wedding, the hotels and the places we would send you. Tap a
            pin or a name to see more.
          </p>
        </div>

        <div className="map-toolbar reveal">
          <div className="map-tabs" role="tablist" aria-label="Choose a map">
            {MAPS.map((map) => (
              <button
                key={map.id}
                role="tab"
                aria-selected={mapId === map.id}
                className={`map-tab ${mapId === map.id ? 'is-active' : ''}`}
                onClick={() => switchMap(map.id)}
              >
                {map.label}
              </button>
            ))}
          </div>

          <div className="map-filters" role="group" aria-label="Filter places">
            <button
              className={`chip ${filter === 'all' ? 'is-active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.key}
                className={`chip ${filter === category.key ? 'is-active' : ''}`}
                style={{ '--chip-color': category.color }}
                onClick={() => setFilter(filter === category.key ? 'all' : category.key)}
              >
                <span className="chip-dot" aria-hidden="true" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="map-layout">
          <div className="map-stage reveal">
            <svg
              className="map-svg"
              viewBox={`0 0 ${proj.width.toFixed(1)} ${proj.height.toFixed(1)}`}
              role="img"
              aria-label={`Map of ${geo.label}`}
            >
              {geo.outline && <path d={proj.area(geo.outline)} className="map-land" />}

              {geo.urban?.map((area, i) => (
                <path key={`urban-${i}`} d={proj.area(area)} className="map-urban" />
              ))}

              {geo.lakes?.map((lake, i) => (
                <path key={`lake-${i}`} d={proj.area(lake)} className="map-water" />
              ))}

              {geo.riverArea && <path d={proj.area(geo.riverArea)} className="map-water" />}

              {geo.riverLine && (
                <path
                  d={proj.line(geo.riverLine)}
                  className="map-river"
                  style={{ strokeWidth: u * 0.9 }}
                />
              )}

              {geo.branches?.map((branch, i) => (
                <path
                  key={`branch-${i}`}
                  d={proj.line(branch)}
                  className="map-river"
                  style={{ strokeWidth: u * 0.7 }}
                />
              ))}

              {geo.islands?.map((island, i) => (
                <path
                  key={`island-${i}`}
                  d={proj.area(island)}
                  className="map-island"
                  style={{ strokeWidth: u * 0.1 }}
                />
              ))}

              {geo.labels.map((label) => {
                const [x, y] = proj.project(label.at);
                return (
                  <text
                    key={label.text}
                    x={x}
                    y={y}
                    className={`map-label ${label.river ? 'map-label--river' : ''}`}
                    style={{
                      fontSize: label.river ? u * 2.1 : u * 1.75,
                      letterSpacing: label.river ? 0 : u * 0.18,
                      strokeWidth: u * 0.6,
                    }}
                  >
                    {label.text}
                  </text>
                );
              })}

              <g className="map-rose" aria-hidden="true">
                <path
                  d={`M${proj.width * 0.955} ${proj.height * 0.16}V${proj.height * 0.07}`}
                  style={{ strokeWidth: u * 0.16 }}
                />
                <path
                  d={`M${proj.width * 0.955 - u * 0.6} ${proj.height * 0.09}L${
                    proj.width * 0.955
                  } ${proj.height * 0.065}L${proj.width * 0.955 + u * 0.6} ${proj.height * 0.09}`}
                  style={{ strokeWidth: u * 0.16 }}
                />
                <text
                  x={proj.width * 0.955}
                  y={proj.height * 0.215}
                  style={{ fontSize: u * 2, letterSpacing: u * 0.1 }}
                >
                  N
                </text>
              </g>

              <g className="map-scale" aria-hidden="true">
                <path
                  d={`M${proj.width * 0.045} ${proj.height * 0.945}h${proj.km(geo.scaleBar.km)}`}
                  style={{ strokeWidth: u * 0.16 }}
                />
                <path
                  d={`M${proj.width * 0.045} ${proj.height * 0.945 - u * 0.5}v${u}M${
                    proj.width * 0.045 + proj.km(geo.scaleBar.km)
                  } ${proj.height * 0.945 - u * 0.5}v${u}`}
                  style={{ strokeWidth: u * 0.16 }}
                />
                <text
                  x={proj.width * 0.045}
                  y={proj.height * 0.945 - u * 1.3}
                  style={{ fontSize: u * 1.75, letterSpacing: u * 0.1 }}
                >
                  {geo.scaleBar.km} km
                </text>
              </g>

              {visible.map((place) => {
                const [x, y] = proj.project(place.coords);
                const isVenue = place.category === 'venue';
                const isActive = place.id === activeId;
                const isHover = place.id === hoverId;
                const showLabel = isVenue || isActive || isHover;
                const flip = x > proj.width * 0.7;
                const r = isVenue ? u * 1.5 : u * 1.05;

                return (
                  <g
                    key={place.id}
                    className={`map-pin ${isVenue ? 'map-pin--venue' : ''} ${
                      isActive ? 'is-active' : ''
                    }`}
                    style={{ color: CATEGORIES[place.category].color }}
                    role="button"
                    tabIndex={0}
                    aria-label={place.name}
                    aria-pressed={isActive}
                    onClick={() => select(place.id, { scrollList: true })}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        select(place.id, { scrollList: true });
                      }
                    }}
                    onMouseEnter={() => setHoverId(place.id)}
                    onMouseLeave={() => setHoverId(null)}
                  >
                    <circle cx={x} cy={y} r={u * 3.2} className="map-pin-hit" />
                    {isVenue && <circle cx={x} cy={y} r={r} className="map-pin-pulse" />}
                    <circle
                      cx={x}
                      cy={y}
                      r={r}
                      className="map-pin-dot"
                      style={{ strokeWidth: u * 0.45 }}
                    />
                    {showLabel && (
                      <text
                        x={flip ? x - u * 2.4 : x + u * 2.4}
                        y={y + u * 0.75}
                        textAnchor={flip ? 'end' : 'start'}
                        className="map-pin-label"
                        style={{ fontSize: u * 2.3, strokeWidth: u * 0.7 }}
                      >
                        {place.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            <p className="map-caption">
              {geo.caption} <span>Illustrative — not to scale for navigation.</span>
            </p>
          </div>

          <div className="map-list" role="list">
            {visible.map((place) => {
              const isActive = place.id === activeId;
              return (
                <div
                  role="listitem"
                  key={place.id}
                  ref={(el) => {
                    itemRefs.current[place.id] = el;
                  }}
                  className={`place ${isActive ? 'is-active' : ''}`}
                  style={{ '--place-color': CATEGORIES[place.category].color }}
                  onMouseEnter={() => setHoverId(place.id)}
                  onMouseLeave={() => setHoverId(null)}
                >
                  <button
                    className="place-head"
                    onClick={() => select(isActive ? null : place.id)}
                    aria-expanded={isActive}
                  >
                    <span className="place-dot" aria-hidden="true" />
                    <span className="place-titles">
                      <span className="place-name">{place.name}</span>
                      <span className="place-meta">{place.meta}</span>
                    </span>
                  </button>

                  <div className="place-body">
                    <div className="place-body-inner">
                      <p>{place.blurb}</p>
                      <a
                        className="link-arrow"
                        href={directionsUrl(place.coords)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Directions
                        <Arrow />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMap;
