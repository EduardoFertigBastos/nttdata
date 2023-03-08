import { PayloadAction, configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const addMovie = createAction<string>('ADD_MOVIE');
export const removeMovie = createAction<string>('REMOVE_MOVIE');

interface StringState {
  movies: string[];
}

const getInitialState = (): StringState => {
  const storedState = localStorage.getItem('@nttdata:movies');

  if (storedState) {
    return JSON.parse(storedState);
  } 
  
  return { movies: [] };
};

const initialState: StringState = getInitialState();

const stringReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addMovie, (state, action: PayloadAction<string>) => {
      state.movies.push(action.payload);
      localStorage.setItem('@nttdata:movies', JSON.stringify(state));
    })
    .addCase(removeMovie, (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((str) => str !== action.payload);
      localStorage.setItem('@nttdata:movies', JSON.stringify(state));
    });
});

export const favMoviesStore = configureStore({
  reducer: stringReducer
});