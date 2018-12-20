import {connect} from 'react-redux';
import ListingShow from './listing_show';
import {fetchListing} from '../../actions/listing_actions';

const msp = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.id] || {}
  const listingHost = state.entities.users[listing.user_id];
  
  return ({
    listing,
    listingHost
  })
}

const mdp = dispatch => {
  return ({
    fetchListing: (id) => dispatch(fetchListing(id)
    )
  })
}

export default connect(msp, mdp)(ListingShow);