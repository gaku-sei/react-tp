/* @flow */

import { combineReducers } from 'redux';

import album from './album';
import modals from './modals';
import photo from './photo';
import photos from './photos';

export default combineReducers({ album, modals, photo, photos });
