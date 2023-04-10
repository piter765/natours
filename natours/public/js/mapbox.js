/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken = 'pk.eyJ1IjoicGl0ZXI3NjUiLCJhIjoiY2xnYXA1dDB1MTFnaDNrcnY2bXV1dmVsdyJ9.s8diARJ4DstjpSsYzrzAdQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/piter765/clgaqqc0v00bo01mmqjjki6a9'
  });
