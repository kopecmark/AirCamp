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
            type="submit" value="Search" ><i className="fas fa-search"></i> Search</button>
        </form>
      </div>
    )
  }


  render() {
    return (
      <div>
        <div className="splash-container">
          <div className="left-side">
            <h1>Camp anywhere you want in the world. </h1>
            <h2>Book amazing camping experiences all over the world. Endless possibilities to choose from, just a couple clicks away.</h2>
            {this.renderSearch()}
          </div>
          <img src={window.images.splash} />
          
        </div>
      </div >
        )
  }
}

export default Splash;