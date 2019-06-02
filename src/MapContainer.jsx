import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import LocationMap from './LocationMap'
import {Marker} from './Marker'
import {InfoWindow} from './InfoWindow'

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <LocationMap google={this.props.google}>
          {this.props.markers.map(marker =>
            <Marker
              key={marker.get('title')}
              title={marker.get('title')}
              properties={marker.get('properties')}
              position={marker.get('position')}
              mapOn={marker.get('mapOn')}
              addMarker={this.props.addMarker}
              onMarkerClick={this.props.onMarkerClick}/>
          )}
          <InfoWindow {...this.props}
              marker={this.props.activeMarker}
              visible={this.props.showingInfoWindow}>
                <div>
                  <h4>{this.props.selectedTitle}</h4>
                </div>
          </InfoWindow>
        </LocationMap>
      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MapContainer)
