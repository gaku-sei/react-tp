/* @flow */

import * as photosActions from '../actions/photos';

export default (state = [], { type, photos } = {}) => {
  switch (type) {
    case photosActions.SUCCESS_FETCH_PHOTOS:
      return photos;
    default:
      return state;
  }
};
