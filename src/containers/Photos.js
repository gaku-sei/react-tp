/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PhotosGrid from '../components/PhotosGrid';

const styles = {
  grid: {
    margin: '20px auto',
  },
};

class Photos extends Component {
  render() {
    const { photos } = this.props;
    return (
      <div style={styles.grid}>
        <PhotosGrid photos={photos} />
      </div>
    );
  }
}

export default connect(({ photos }) => ({
  photos,
}), {
})(Photos);
