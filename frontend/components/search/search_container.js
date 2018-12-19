import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions'


const mapStateToProps = (state) => {
  let listings = Object.keys(state.entities.listings).map(key => state.entities.listings[key])
  return({
    listings: listings
    
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchListings: () => dispatch(fetchListings()),
  })
}

export default connect(mapStateToProps, mapdispatchToProps)(Search);
