import React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import NavBarContainer from '././nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';


const App = () => (
  <div>
    <header >
      <NavBarContainer />
    </header>
    <Modal />
  </div>
);

export default App;