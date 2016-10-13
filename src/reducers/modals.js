/* @flow */

import * as modalsActions from '../actions/modals';

export default (state = {}, { kind, type } = {}) => {
  switch (type) {
    case modalsActions.OPEN_MODAL:
      return { ...state, [kind]: true };
    case modalsActions.CLOSE_MODAL:
      const newState = {};

      for (const key in state) {
        if (key !== kind) {
          newState[key] = state[key];
        }
      }

      return newState;
    default:
      return state;
  }
};
