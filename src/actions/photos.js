/* @flow */

import type { Dispatch } from 'redux'

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

export const all = ({ albumId }: PhotoQuery = {}) => async (dispatch: Dispatch) => {
  try {
    const query = albumId ? `albumId=${albumId}` : config.albumsNames.map((name) => `albumId=${name}`).join('&');
    const res = await fetch(`${config.url}/photos?_limit=${config.defaultLimit}&${query}`);
    return dispatch({ photos: await res.json(), type: SUCCESS_FETCH_PHOTOS });
  } catch (error) {
    return dispatch({ error, type: FAIL_FETCH_PHOTOS });
  }
};

export const find = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await fetch(`${config.url}/photos/${id}`);
    return dispatch({ photo: await res.json(), type: SUCCESS_FETCH_PHOTO });
  } catch (error) {
    return dispatch({ error, type: FAIL_FETCH_PHOTO });
  }
};

export const create = (photo: Photo) => async (dispatch: Dispatch) => {
  try {
    const res = await fetch(`${config.url}/photos`, {
      body: JSON.stringify(photo),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    return dispatch({ photo: await res.json(), type: SUCCESS_CREATE_PHOTO });
  } catch (error) {
    return dispatch({ error, type: FAIL_CREATE_PHOTO });
  }
};

export const reinit = () => ({
  photo: {},
  type: SUCCESS_FETCH_PHOTO,
});
