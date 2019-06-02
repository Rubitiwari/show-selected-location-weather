import {Map} from 'immutable';

function setState(state, newState) {
  console.log()
  return state.merge(newState);
}

function onMarkerClick(state, marker) {
  return state.merge(Map({
    'activeMarker': marker,
    'selectedTitle': marker.get('title'),
    'showingInfoWindow': true
  }))
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'MARKER_CLICK':
        return onMarkerClick(state, action.marker);
    default:
      return state
  }
}
