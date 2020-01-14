import { INCREASE_VIEWS, ADD_TO_HISTORY } from './types';

export const saveRecentViewed = currentViewedId => (dispatch, getState) => {
   const { viewed } = getState().History;
   console.log(viewed.length);
   if (!viewed.length) {
      dispatch({
         type: ADD_TO_HISTORY,
         payload: [{ id: currentViewedId, views: 1 }],
      });
   } else {
      let viewedItemIndex = viewed.findIndex(
         item => item.id == currentViewedId
      );
      console.log('viewed...', viewedItemIndex);

      if (viewedItemIndex >= 0) {
         let increaseViews = viewed[viewedItemIndex]['views'] + 1;
         console.log('increaseViews', increaseViews);
      } else {
         dispatch({
            type: ADD_TO_HISTORY,
            payload: [{ id: currentViewedId, views: 1 }],
         });
      }
   }
};
