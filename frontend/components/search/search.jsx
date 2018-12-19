import React from 'react';
import ReactDOM from 'react-dom';
import ListingMap from '../map/listing_map';
import ListingIndex from '../listings/listing_index';




class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {listings, fetchListings} = this.props
    return(
      <div className="listings-map-container">
          <ListingIndex listings={listings} fetchListings={fetchListings} />
          <ListingMap listings={listings} />
      </div>
    )
  }
}
export default Search;