/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { find as findPhoto, reinit as reinitPhoto } from '../actions/photos';
import PhotoCard from '../components/PhotoCard';

class Photo extends Component {
  componentWillMount() {
    const { findPhoto, params, reinitPhoto } = this.props;

    findPhoto(params.id);

    window.onpopstate = () => {
      reinitPhoto();
    };
  }

  componentWillUnmount () {
    setTimeout(() => {
      window.onpopstate = null;
    });
  }

  render() {
    const { photo } = this.props;

    return (
      <div>
        <PhotoCard photo={photo} />
      </div>
    );
  }
}

export default connect(({ photo }) => ({
  photo,
}), {
  findPhoto,
  reinitPhoto,
})(Photo);
