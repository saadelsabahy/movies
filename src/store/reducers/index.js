import { combineReducers } from 'redux';
import MoviesList from './MoviesListReducer';
import Categories from './MoviesCategoriesReducer';
import SearchMovies from './SearchMovieReducer';
import History from './HistoryReducer';
export default combineReducers({
   MoviesList,
   Categories,
   SearchMovies,
   History,
});
