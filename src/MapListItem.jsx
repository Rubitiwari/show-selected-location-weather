import React from 'react';
import ReactWeather from 'react-open-weather';

export default class MapListItem extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.activeMarker !== prevProps.activeMarker) {
      let img_ref = this.refs.cg_image;
      if (this.props.showingInfoWindow && (this.props.selectedTitle === this.props.title)) {
        img_ref.style.border = "2px solid aqua";
      }
      else {
        img_ref.style.border = null
      }
    }
  }

  getMarker(title_match) {
    let match_list = this.props.gmapMarkers.filter(item =>
      item.get('title') === title_match
    )
    if (match_list) {
      return match_list.first()
    }
    else {
      return null;
    }
  }

  render() {
    let latitude = parseFloat(this.props.position.first()).toFixed(3);
    let longitude = parseFloat(this.props.position.last()).toFixed(3);
    return (
      <div className="col-sm-3">
        <div className="flexContainer">
          <div>
            <div ref="cg_image" style={{width:200}} onClick={() =>this.props.onMarkerClick(this.getMarker(this.props.title))}>
              <a href={this.props.url} target="_blank">{this.props.title}</a>
              <ReactWeather
                forecast="today"
                apikey="1d7c3fe0a7be475e9e3110440190106"
                type="geo"
                lat={latitude}
                lon={longitude}
              />
              <div>
                <h3>Weekly Weather</h3>
                <hr/>
                <ReactWeather
                  forecast="5days"
                  apikey="1d7c3fe0a7be475e9e3110440190106"
                  type="geo"
                  lat={latitude}
                  lon={longitude}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}
