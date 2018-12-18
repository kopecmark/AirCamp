import React from 'react';
import ListingIndexItem from './listing_index_item.jsx';


class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }


  render() {
    if (this.props.listings){
    let listingItems = Object.values(this.props.listings).map(listing => {
      return (
        <ListingIndexItem
          listing={listing}
          key={listing.id}

        />
      )
    })

    return (
      <div>
        <h3>Where to Stay</h3>
        <div>
          <ul>
            {listingItems}
          </ul>
        </div>
      </div>
    )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default ListingIndex;