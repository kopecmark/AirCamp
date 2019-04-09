import React from 'react';
import {Link} from 'react-router-dom';


class Splash extends React.Component {
  renderSearch() {
    return (
      <div className='splash-search'>
        <form onSubmit={(e) => this.props.history.push('/listings')}>
          <div className='input-box'>
            <span><i className="fas fa-location-arrow"></i></span>
            <input type="text"
              placeholder="Camping near me..." />
          </div>
          <button className="submit-search"
            onClick={(e) => this.props.history.push('/listings')}
            type="submit" value="Search" ><i className="fas fa-search"></i>Search</button>
        </form>
      </div>
    )
  }


  render() {
    return(
      <div className="background">
        <div className="splash-container">
          <h1>Camp anywhere you want. </h1>
          <h2>Book amazing camping experiences. Endless possibilities to choose from, just a couple clicks away.</h2>
          <div>{this.renderSearch()}</div>
          {/* <div className="discover-filters">
            <h2>Discover Camping...</h2>
            {this.SearchItems()}
          </div> */}
        </div>
      </div >
    )}

}

export default Splash;