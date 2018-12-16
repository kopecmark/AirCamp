import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// for testing
import * as commands from './actions/session_actions';
document.addEventListener('DOMContentLoaded', () => {
  
  let store;

  
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // testing in console
  window.login = commands.login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchListing = fetchListings;
  // end testing section
  
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
});