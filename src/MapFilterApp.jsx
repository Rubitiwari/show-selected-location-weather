import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import './App.css';
import List from './List';
import CampMapContainer from './MapContainer';
import { withRouter } from 'react-router-dom';

export class MapFilterApp extends React.Component {

  render() {
    return (
      <div className="container">
        <CampMapContainer {...this.props} />
        <List {...this.props}/>
      </div>
  )};
}

function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    showingInfoWindow: state.get('showingInfoWindow'),
    activeMarker: state.get('activeMarker'),
    selectedTitle: state.get('selectedTitle'),
    gmapMarkers: state.get('gmapMarkers')
  };
}


export const CampFilterAppContainer = withRouter(connect(mapStateToProps,actionCreators)(MapFilterApp));
