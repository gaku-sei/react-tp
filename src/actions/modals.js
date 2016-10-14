/* @flow */

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const open = (kind: string) => ({
  kind, type: OPEN_MODAL,
});

export const close = (kind: string) => ({
  kind, type: CLOSE_MODAL,
});
