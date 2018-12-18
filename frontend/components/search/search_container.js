import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions'


const mapStateToProps = (state) => {
  return({
    listings: state.entities.listings
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchListings: () => dispatch(fetchListings()),
  })
}

export default connect(mapStateToProps, mapdispatchToProps)(Search);
