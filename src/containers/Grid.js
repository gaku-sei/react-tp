/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';

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

class Grid extends Component<void, Props, void> {
  render() {
    const { photos } = this.props;

    return (
      <div style={styles.root}>
        <GridList cellHeight={150} cols={7} style={styles.gridList}>
          {photos.map(({ id, title, thumbnailUrl, url }) => (
            <GridTile key={id} title={title}>
              <img alt={title} src={thumbnailUrl} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default connect(({ photos }) => ({
  photos,
}))(Grid);
