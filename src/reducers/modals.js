/* @flow */

import * as modalsActions from '../actions/modals';

type ModalsAction = Action & {
  kind: string;
}

export default (state: { [key: string]: string } = {}, { kind, type }: ModalsAction = {}) => {
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
