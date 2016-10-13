/* @flow */

import * as photosActions from '../actions/photos';

export default (state = [], action = {}) => {
  switch (action.type) {
    case photosActions.SUCCESS_FETCH_PHOTO:
      return action.photo;
    default:
      return state;
  }
};
