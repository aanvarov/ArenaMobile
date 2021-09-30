import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './Auth/reducer';

// Configure persisted store with localStorage property name
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(logger, reduxThunk),
);

const persister = persistStore(store);

export {store as default, persister};
