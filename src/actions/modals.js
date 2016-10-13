/* @flow */

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const open = (kind) => ({
  kind, type: OPEN_MODAL,
});

export const close = (kind) => ({
  kind, type: CLOSE_MODAL,
});
