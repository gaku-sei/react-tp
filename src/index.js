/* @flow */

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import App from './containers/App';
import Photo from './containers/Photo';
import Photos from './containers/Photos';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Photos} />
        <Route path="photos/:id" component={Photo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
