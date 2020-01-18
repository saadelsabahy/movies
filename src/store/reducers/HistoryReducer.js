import {
   INCREASE_VIEWS,
   ADD_TO_HISTORY,
   SET_MOVIE_VIEWS,
} from '../actions/types';

const INITIAL_STATE = {
   viewed: [],
   views: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {
      case INCREASE_VIEWS:
         return { ...state, viewed: payload };
      case ADD_TO_HISTORY:
         return { ...state, viewed: payload };
      case SET_MOVIE_VIEWS:
         return { ...state, views: payload };
      default:
         return state;
   }
};
