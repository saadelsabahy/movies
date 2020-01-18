import { INCREASE_VIEWS, ADD_TO_HISTORY, SET_MOVIE_VIEWS } from './types';

export const saveRecentViewed = currentViewedId => (dispatch, getState) => {
   const { viewed } = getState().History;
   if (!viewed.length) {
      dispatch({
         type: ADD_TO_HISTORY,
         payload: [{ id: currentViewedId, views: 1 }],
      });
   } else {
      let viewedItemIndex = viewed.findIndex(
         item => item.id == currentViewedId
      );

      if (viewedItemIndex >= 0) {
         viewed[viewedItemIndex]['views'] =
            viewed[viewedItemIndex]['views'] + 1;
         dispatch({ type: INCREASE_VIEWS, payload: viewed });
      } else {
         dispatch({
            type: ADD_TO_HISTORY,
            payload: [...viewed, { id: currentViewedId, views: 1 }],
         });
      }
   }
};

export const getViewsById = id => (dispatch, getState) => {
   const { viewed } = getState().History;
   let viewedMovie = viewed.filter(item => item.id == id);
   const [{ views }] = viewedMovie;
   console.log(views);

   dispatch({ type: SET_MOVIE_VIEWS, payload: views });
};
