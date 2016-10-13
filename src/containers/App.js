/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { all as allPhotos } from '../actions/photos';
import Menu from './Menu';

class App extends Component {
  componentWillMount() {
    this.props.allPhotos();
  }

  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider>
        <div className="app">
          <Menu />
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(() => ({
}), {
  allPhotos,
})(App);
