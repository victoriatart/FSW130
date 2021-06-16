import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Pineapple Express", rating: "5/5" },
  { id: "2", name: "Us", rating: "2/5" },
];

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    movieAdded(state, action) {
      state.push(action.payload);
    },
    movieUpdated(state, action) {
      const { id, name } = action.payload;
      const existingMovie = state.find((movie) => movie.id === id);
      if (existingMovie) {
        existingMovie.name = name;
      }
    },
    movieDeleted(state, action) {
      const { id } = action.payload;
      const existingMovie = state.entities.find((movie) => movie.id === id);
      if (existingMovie) {
        state.entities.filter((movie) => movie.id !==id);
      }
    }
  },
});

export const { movieAdded } = moviesSlice.actions;

export default moviesSlice.reducer;
