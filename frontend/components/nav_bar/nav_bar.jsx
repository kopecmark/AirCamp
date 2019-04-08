import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  
  showExplore() {
      return (
      <Link to="/listings">
        <span className="nav-links">Explore the Campsites</span>
      </Link>
      );
  }
  
  renderSessionOptions() {
    const { currentUser, logout , location} = this.props;

    const atListingDisplay = (location.pathname === '/listings') ? null : this.showExplore();

    if (currentUser) {
      return (
        <ul className='right-nav'>
          <li>{atListingDisplay}</li> 
          <li><Link to="/listings"><span className="nav-links">Trips</span></Link></li>
          <li><span className="nav-session"><button onClick={logout}>
                Logout
              </button></span>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='right-nav'>
          <li>{atListingDisplay}</li> 
          <li><span className="nav-session"><button onClick={() => this.props.openModal('signup')}>Sign Up</button></span></li>
          <li><span className="nav-session"><button onClick={() => this.props.openModal('login')}>Log In</button></span></li>
        </ul>
      )
    }
  }

  
  renderLogo() {
    return (
        <div className="logo">
          <Link to="/">
            <img src={window.images.logo} />
          </Link>
        </div>
    )
  }


  renderSearch() {
    return (
      <div className='search-container' >
        <form onSubmit={(e) => this.props.history.push('/listings')}>
          <span><i className="fas fa-search"></i></span>
          <input type="text"
            placeholder="Search..."
            />
        </form>
      </div>
    )
  }

  render() {
    return (
      <nav className='navbar'>
        {this.renderLogo()}
        {this.renderSearch()}
        {this.renderSessionOptions()}
      </nav>
    )
  }
}



export default NavBar;
