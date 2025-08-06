import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //update the state with the new movies nowplaying
      state.nowPlayingMovies = action.payload;
    }
  }
});


export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;