import React from 'react';
import ReactDOM from 'react-dom';

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class ListingMap extends React.Component{

  componentDidMount() {
    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (

      <div className="map" ref={map => this.mapNode = map}> 
      // this ref gives us access to the map dom node
      MAP
      </ div>
    )
  }
    
}

export default ListingMap;