export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);
    listings.filter(listing => !this.markers[listing.id])
      .forEach(newlisting => this.createMarkerFromlisting(newlisting, this.handleClick))

    Object.keys(this.markers).filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]))
  }

  createMarkerFromlisting(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.lng);

    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      listingId: listing.id,
      label: `$${listing.daily_cost}`
    })

  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId]
  }

}