/* @flow */

import * as photosActions from '../actions/photos';

export default (state = [], action = {}) => {
  switch (action.type) {
    case photosActions.SUCCESS_FETCH_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};
