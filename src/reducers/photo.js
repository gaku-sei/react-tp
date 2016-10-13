/* @flow */

import * as photosActions from '../actions/photos';

export default (state = [], { photo, type } = {}) => {
  switch (type) {
    case photosActions.SUCCESS_FETCH_PHOTO:
      return photo;
    default:
      return state;
  }
};
