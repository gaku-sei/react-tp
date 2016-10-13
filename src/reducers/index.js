/* @flow */

import { combineReducers } from 'redux';

import photo from './photo';
import photos from './photos';

export default combineReducers({ photo, photos });
