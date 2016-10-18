/* @flow */

export const SELECT_ALBUM = 'SELECT_ALBUM';

export const select = (albumId: ?string = null) => ({
  albumId: albumId, type: SELECT_ALBUM,
});
