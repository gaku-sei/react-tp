/* @flow */

import type { Dispatch } from 'redux';

export const SELECT_ALBUM = 'SELECT_ALBUM';

export const select = (albumId: ?string = null): Dispatch => ({
  albumId: albumId, type: SELECT_ALBUM,
});
