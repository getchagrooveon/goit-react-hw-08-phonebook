import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.contacts.items;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
export const getFilter = state => state.contacts.filter;
export const getAuthStatus = state => state.auth.status;
export const getAuthToken = state => state.auth.access_token;
export const getUserInfo = state => state.auth.user;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
