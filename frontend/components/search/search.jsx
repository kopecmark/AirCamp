import React from 'react';
import ReactDOM from 'react-dom';
import ListingMap from '../map/listing_map';
import ListingIndex from '../listings/listing_index';




class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
        <div>
          <ListingIndex />
        </div>
        <div>
          <ListingMap />
        </div>
      );
  };
}
export default Search;