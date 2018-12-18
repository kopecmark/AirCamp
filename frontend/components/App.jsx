import React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import NavBarContainer from '././nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import ListingIndexContainer from './listings/listing_index_container';

const App = () => (
  <div>
    <header >
      <NavBarContainer />
    </header>
    <Modal />

    <Switch>
      <Route exact path="/listings" component={ListingIndexContainer} />
    </Switch>

  </div>
);

export default App;