import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListingIndexItem = ({ listing }) => (
  <li>
    <div>
      <h1>${listing.site_title}</h1>
    </div>
  </li>
)

export default ListingIndexItem;