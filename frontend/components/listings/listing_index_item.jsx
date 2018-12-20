import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListingIndexItem = ({ listing }) => (
  <li>
    <div className="listing-container">
      <Link to={`listings/${listing.id}`}>
        <img className="listing-thumbnail" src={listing.photoUrls[0]} />
        <h2>{listing.site_title}</h2>
        ${listing.daily_cost}/night
      </ Link>
    </div>
  </li>
)

export default ListingIndexItem;