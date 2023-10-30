import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "api/api";



export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
  items: [],
  isLoading: false,
  error: null,
  },
  
  reducers: {
  },
  
  extraReducers: {
  [fetchContacts.pending]: (state, action) => {
  state.isLoading = true;
  state.error = null;
  // state.items = []; 
  },
  [fetchContacts.fulfilled]: (state, action) => {
  state.isLoading = false;
  // state.error = null;
  state.items = action.payload;
  },
  [fetchContacts.error]: (state, action) => {
  state.isLoading = true;
  state.error = true;
  // state.items = [];
  },
  [addContacts.pending]: (state, action) => {
  state.isLoading = true;
  state.error = false;
  // state.items = [];
  },
  [addContacts.fulfilled]: (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
  },
  [addContacts.error]: (state, action) => {
  state.isLoading = true;
  state.error = true;
  state.items = [];
  },
  [deleteContacts.pending]: (state, action) => {
  state.isLoading = true;
  state.error = null;
  // state.items = [];
  },
  [deleteContacts.fulfilled]: (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
  contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
  // state.items = [];
  },
  [deleteContacts.error]: (state, action) => {
  state.isLoading = true;
  state.error = true;
  // state.items = [];
  },
  },
  });

// export const { deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
