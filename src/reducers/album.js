/* @flow */

import * as albumActions from '../actions/album';

type AlbumAction = Action & {
  albumId: ?string;
}

export default (state: ?string = null, { albumId, type }: AlbumAction = {}) => {
  switch (type) {
    case albumActions.SELECT_ALBUM:
      return albumId;
    default:
      return state;
  }
};
