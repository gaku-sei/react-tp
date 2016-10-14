/* @flow */

import * as photosActions from '../actions/photos';

type PhotosActions = Action & {
  photo: Photo;
}

export default (state: Photo = {}, { photo, type }: PhotosActions = {}) => {
  switch (type) {
    case photosActions.SUCCESS_FETCH_PHOTO:
      return photo;
    default:
      return state;
  }
};
