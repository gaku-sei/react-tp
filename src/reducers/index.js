/* @flow */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import album from './album';
import modals from './modals';
import photo from './photo';
import photos from './photos';

export default combineReducers({ album, form, modals, photo, photos });
