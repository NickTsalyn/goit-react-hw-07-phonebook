// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts } from "api/api";


// export const slice = createSlice({
//   name: 'contact',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//   },

//   reducers: {
//     setItem(state, action) {
//       state.contacts.items = action.payload;
//     },

//     addContact(state, action) {
//       state.contacts.items = [...state.contacts.items, action.payload];
//     },
//   },

//   extraReducers: {
//     [fetchContacts.pending]: (state, action) => {
//       state.contacts.isLoading = true;
//       state.contacts.items = [];
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       state.contacts.isLoading = false;
//       state.contacts.items = action.payload;
//     },
//     [fetchContacts.error]: (state, action) => {
//       state.contacts.isLoading = true;
//       state.contacts.error = true;
//       state.contacts.items = [];
//     },
//   },
// });

// export const { setItem, addContact } = slice.actions
// export const fetchReducer =  slice.reducer