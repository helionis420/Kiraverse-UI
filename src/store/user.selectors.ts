import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const selectUserRoot = createSelector(
  (state: RootState) => {
    return state;
  },
  (state) => {
    return state.user;
  },
);

export const selectToken = createSelector(selectUserRoot, (state) => {
  return state.token;
});
export const selectUser = createSelector(selectUserRoot, (state) => {
  return state.user;
});
export const selectWallet = createSelector(selectUserRoot, (state) => {
  return state.user?.wallet_address || '';
});
