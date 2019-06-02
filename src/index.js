import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer'
import './index.css';
import './App.css'
import {CampFilterAppContainer} from './MapFilterApp';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducer)

// convert json into dict for use by the React components
// add mapOn variable to indicate if the marker should be visible
// by default, set mapOn to false, filtering will indicate if it should be true
function get_campgrounds(features) {
  let campgrounds = []
  features.forEach(feature => {
    campgrounds.push({
      'title' : feature['properties']['title'],
      'position' : [feature['geometry']['coordinates'][1],
      feature['geometry']['coordinates'][0]],
      'properties': feature['properties'],
      'mapOn': true

    })
  });
  return campgrounds
}

let features = [{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.166149, 42.865508]
  },
  "properties": {
    "title": "Mazama",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.037881, 42.879145]
  },
  "properties": {
    "title": "Lost Creek",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.337174, 42.877807]
  },
  "properties": {
    "title": "Huckleberry Mountain",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.463867, 42.889648]
  },
  "properties": {
    "title": "Natural Bridge -USFS",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.4353305556, 42.9162388889]
  },
  "properties": {
    "title": "Farewell Bend Campground",
    "marker-size": "small"
  }
}];

set_state(get_campgrounds(features));

function set_state(campgrounds) {
  store.dispatch ({
  type: 'SET_STATE',
  state: {
    markers: campgrounds,
    gmapMarkers: [],
    showingInfoWindow: "false",
    activeMarker: null,
    selectedTitle: ""
  }
 })
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CampFilterAppContainer/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
