import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 37.780391,
    lng: -122.4580377,
  }, // San Francisco coords
  zoom: 12,
  mapTypeControl: false,
  streetViewControl: false,
  zoomControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT
  },
  fullscreenControl: false,
  mapTypeId: 'terrain'
  
};

class ListingMap extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // set the map to show SF

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);

  }

  // regularListener() {
  //   google.maps.event.addListener(this.map, 'idle', () => {

  //     const { north, south, east, west } = this.map.getBounds().toJSON();
  //     const bounds = {
  //       northEast: { lat: north, lng: east },
  //       southWest: { lat: south, lng: west }
  //     }
  //     this.props.updateFilters('bounds', bounds);
  //   })
  // }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  render() {
    return (

      <div className="map" ref={map => this.mapNode = map}> 

      </ div>
    )
  }
    
}

export default ListingMap;