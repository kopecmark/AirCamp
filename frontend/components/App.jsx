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

const App = () => (
  <div>
    <header >
      <NavBarContainer />
    </header>
    <Modal />

    <Switch>
      <Route exact path="/" component={SearchContainer} />
      <Redirect to="/" />
    </Switch>

  </div>
);

export default App;