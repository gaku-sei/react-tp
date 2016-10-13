/* @flow */

import config from '../config';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const SUCCESS_FETCH_PHOTOS = 'SUCCESS_FETCH_PHOTOS';
export const FAIL_FETCH_PHOTOS = 'FAIL_FETCH_PHOTOS';

export const FETCH_PHOTO = 'FETCH_PHOTO';
export const SUCCESS_FETCH_PHOTO = 'SUCCESS_FETCH_PHOTO';
export const FAIL_FETCH_PHOTO = 'FAIL_FETCH_PHOTO';

export const CREATE_PHOTO = 'CREATE_PHOTO';
export const SUCCESS_CREATE_PHOTO = 'SUCCESS_CREATE_PHOTO';
export const FAIL_CREATE_PHOTO = 'FAIL_CREATE_PHOTO';

export const all = ({ albumId } = {}) => (dispatch) =>
  fetch(`${config.url}/photos?_limit=${config.defaultLimit}${albumId ? `&albumId=${albumId}` : ''}`)
    .then((res) => res.json())
    .then((photos) => dispatch({ photos, type: SUCCESS_FETCH_PHOTOS }))
    .catch((error) => dispatch({ error, type: FAIL_FETCH_PHOTOS }));

export const find = (id) => (dispatch) =>
  fetch(`${config.url}/photos/${id}`)
    .then((res) => res.json())
    .then((photo) => dispatch({ photo, type: SUCCESS_FETCH_PHOTO }))
    .catch((error) => dispatch({ error, type: FAIL_FETCH_PHOTO }));

export const create = (photo) => (dispatch) =>
  fetch(`${config.url}/photos`, {
    body: JSON.stringify(photo),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((res) => res.json())
    .then((photo) => dispatch({ photo, type: SUCCESS_CREATE_PHOTO }))
    .catch((error) => dispatch({ error, type: FAIL_CREATE_PHOTO }));

export const reinit = () => ({
  photo: {},
  type: SUCCESS_FETCH_PHOTO,
});
