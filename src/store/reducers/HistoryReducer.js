import { INCREASE_VIEWS, ADD_TO_HISTORY } from '../actions/types';

const INITIAL_STATE = {
   viewed: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {
      case INCREASE_VIEWS:
         return { ...state, viewed: payload };
      case ADD_TO_HISTORY:
         return { ...state, viewed: payload };
      default:
         return state;
   }
};
