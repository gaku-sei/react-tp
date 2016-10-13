/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { all as allPhotos } from '../actions/photos';
import Grid from './Grid';
import Menu from './Menu';

injectTapEventPlugin();

class App extends Component {
  componentWillMount() {
    this.props.allPhotos();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Menu />
          <Grid />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(({ photos }) => ({
  photos,
}), {
  allPhotos,
})(App);
