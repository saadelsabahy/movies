import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
};
const PersistReducer = persistReducer(persistConfig, MainReducer);

export const store = createStore(
   PersistReducer,
   {},
   compose(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
