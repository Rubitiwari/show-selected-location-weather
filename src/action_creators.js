export function onMarkerClick(marker) {
  return {
    type: 'MARKER_CLICK',
    marker,

  }
}

export function addMarker(marker) {
    return {
      type: 'ADD_MARKER',
      marker
    }
}
