import { createSlice } from '@reduxjs/toolkit';

export const querySlicer = createSlice({
  name: 'query',
  initialState: {
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = querySlicer.actions;
export const selectQuery = (state) => state.query.query;

export default querySlicer.reducer;
