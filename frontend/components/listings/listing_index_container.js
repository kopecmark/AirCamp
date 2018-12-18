import React from 'react';
import ListingIndex from './listing_index';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions'


const mapStateToProps = (state) => {
  let listings = Object.values(state.entities.listings).map(listing => listing)
  return ({
    listings: listings
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchListings: () => dispatch(fetchListings())
  })
}

export default connect(mapStateToProps, mapdispatchToProps)(ListingIndex);
