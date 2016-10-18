import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';

const styles = {
  card: {
    margin: '20px auto',
    width: '70%',
  },
};

export default class PhotoCard extends Component {
  render() {
    const { photo: { albumId, title, url } } = this.props;

    return (
      <Card style={styles.card}>
        <CardHeader title={title} subtitle={`Album : ${albumId}`}>
          <CardMedia overlay={<CardTitle title={title} />}>
            <img alt={title} src={url} />
          </CardMedia>
        </CardHeader>
      </Card>
    );
  }
}
