/* @flow */

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const SUCCESS_FETCH_PHOTOS = 'SUCCESS_FETCH_PHOTOS';
export const FAIL_FETCH_PHOTOS = 'FAIL_FETCH_PHOTOS';

export const all = () => (dispatch) =>
  fetch('http://localhost:3000/photos?_limit=10')
    .then((res) => res.json())
    .then((photos) => dispatch({ photos, type: SUCCESS_FETCH_PHOTOS }))
    .catch((error) => dispatch({ error, type: FAIL_FETCH_PHOTOS }));
