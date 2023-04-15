/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGl0ZXI3NjUiLCJhIjoiY2xnYXA1dDB1MTFnaDNrcnY2bXV1dmVsdyJ9.s8diARJ4DstjpSsYzrzAdQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/piter765/clgaqqc0v00bo01mmqjjki6a9',
    scrollZoom: false
    // center: [-118.113491,34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //add marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //extend the map bounds to include location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 200,
      right: 200
    }
  });
};
