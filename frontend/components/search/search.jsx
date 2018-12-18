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
      <div>
        <div>
          <ListingIndex listings={listings} fetchListings={fetchListings} />
        </div>
        <div>
          <ListingMap listings={listings}/>
        </div>
      </div>
    )
  }
}
export default Search;