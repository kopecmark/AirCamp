import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListingIndexItem = ({ listing }) => (
  <li>
    <div>
      <h2>{listing.site_title}</h2>
      <img src={listing.photoUrls[0]} />
      ${listing.daily_cost}/night
    </div>
  </li>
)

export default ListingIndexItem;