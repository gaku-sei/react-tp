/* @flow */

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const SUCCESS_FETCH_PHOTOS = 'SUCCESS_FETCH_PHOTOS';
export const FAIL_FETCH_PHOTOS = 'FAIL_FETCH_PHOTOS';

export const FETCH_PHOTO = 'FETCH_PHOTO';
export const SUCCESS_FETCH_PHOTO = 'SUCCESS_FETCH_PHOTO';
export const FAIL_FETCH_PHOTO = 'FAIL_FETCH_PHOTO';

export const all = ({ albumId } = {}) => (dispatch) =>
  fetch(`http://localhost:3000/photos?_limit=100${albumId ? `&albumId=${albumId}` : ''}`)
    .then((res) => res.json())
    .then((photos) => dispatch({ photos, type: SUCCESS_FETCH_PHOTOS }))
    .catch((error) => dispatch({ error, type: FAIL_FETCH_PHOTOS }));

export const find = (id) => (dispatch) =>
  fetch(`http://localhost:3000/photos/${id}`)
    .then((res) => res.json())
    .then((photo) => dispatch({ photo, type: SUCCESS_FETCH_PHOTO }))
    .catch((error) => dispatch({ error, type: FAIL_FETCH_PHOTO }));

export const reinit = () => ({
  photo: {},
  type: SUCCESS_FETCH_PHOTO,
});
