import React from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import NavBarContainer from '././nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import ListingIndexContainer from './listings/listing_index_container';
import SearchContainer from './search/search_container';
import ListingShowContainer from './listing_show/listing_show_container';
import SplashContainer from './splash/splash';

const App = () => (
  <div>
    <header >
      <NavBarContainer />
    </header>
    <Modal />

    <Switch>
      <Route exact path="/listings/:id" component={ListingShowContainer} />
      <Route exact path="/listings" component={SearchContainer} />
      <Route path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>

  </div>
);

export default App;