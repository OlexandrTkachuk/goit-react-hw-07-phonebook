// contacts state selectors

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

// filter state selectors

export const getFilter = state => state.filter;
