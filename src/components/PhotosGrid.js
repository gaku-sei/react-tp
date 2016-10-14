/* @flow */

import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Link } from 'react-router';

type Props = {
  photos: Array<Photo>;
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '1050px',
  },
};

export default class PhotosGrid extends Component<void, Props, void> {
  render() {
    const { photos } = this.props;

    return (
      <div style={styles.root}>
        <GridList cellHeight={150} cols={7} style={styles.gridList}>
          {photos.map(({ id, title, thumbnailUrl, url }) => (
            <GridTile key={id} title={title}>
              <Link to={`/photos/${(id)}`}>
                <img alt={title} height="150" src={thumbnailUrl || url} />
              </Link>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
