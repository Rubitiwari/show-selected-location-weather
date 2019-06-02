import React from 'react';
import MapListItem from './MapListItem'

export default class List extends React.Component {
  getCampgrounds() {
    return this.props.markers.filter(
      cg => cg.get('mapOn') === true
    )
  }
  render() {
    return (
      <div  className="displayCityList">
        {this.getCampgrounds().map(item =>
          <MapListItem {...this.props}
                       key={item.get('title')}
                       title={item.get('title')}
                       image={item.get('image')}
                       url={item.get('url')}
                       position={item.get('position')}
                  />
        )}
      </div>
  )}
  }
