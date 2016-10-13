/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from './Grid';

const styles = {
  grid: {
    margin: '20px auto',
  },
};

class Photos extends Component {
  render() {
    return (
      <div style={styles.grid}>
        <Grid />
      </div>
    );
  }
}

export default connect(({ photos }) => ({
  photos,
}), {
})(Photos);
