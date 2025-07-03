import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "SearchCache",
  initialState: {},
  reducers: {
    addWords: (state, action) => {
      Object.assign(state, action.payload)
    },
  },
});

export const { addWords } = SearchSlice.actions;
export default SearchSlice.reducer;
