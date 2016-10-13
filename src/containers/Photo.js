/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';

import { find as findPhoto, reinit as reinitPhoto } from '../actions/photos';

const styles = {
  card: {
    margin: '20px auto',
    width: '40%',
  },
};

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
    const { photo: { albumId, title, url } } = this.props;

    return (
      <div>
        <Card style={styles.card}>
          <CardHeader title={title} subtitle={`Album : ${albumId}`}>
            <CardMedia overlay={<CardTitle title={title} />}>
              <img alt={title} src={url} />
            </CardMedia>
          </CardHeader>
        </Card>
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
