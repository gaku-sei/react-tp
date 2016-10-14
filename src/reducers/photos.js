/* @flow */

import * as photosActions from '../actions/photos';

type PhotosAction = Action & {
  photos: Array<Photo>;
}

export default (state:  Array<Photo> = [], { type, photos }: PhotosAction = {}) => {
  switch (type) {
    case photosActions.SUCCESS_FETCH_PHOTOS:
      return photos;
    default:
      return state;
  }
};
