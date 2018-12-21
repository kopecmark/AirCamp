import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
  renderSessionOptions() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <ul className='right-nav-logged-in'>
          <li className="session-name">Hi, {currentUser.first_name}!</li>
          <li><button className="logout-button" onClick={logout}>Log Out
            </button></li>
        </ul>
      );
    } else {
      return (
        <ul className='right-nav'>
          <li><span className="nav-links">Invites</span></li>
          <li><span className="nav-links">Camp</span></li>
          <li><span className="nav-links">Host</span></li>
          <li><span className="nav-links">Scout</span></li>
          <li><span className="nav-links">About</span></li>
          <li><span className="nav-session"><button onClick={() => this.props.openModal('signup')}>Sign up</button></span></li>
          <li><span className="nav-session"><button onClick={() => this.props.openModal('login')}>Log in</button></span></li>
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
