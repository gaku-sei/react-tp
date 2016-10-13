/* @flow */

import { combineReducers } from 'redux';

import modals from './modals';
import photo from './photo';
import photos from './photos';

export default combineReducers({ modals, photo, photos });
