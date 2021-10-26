import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './Auth/reducer';
import currentDayReducer from './Day/reducer';

// Configure persisted store with localStorage property name
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'day'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  day: currentDayReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(logger, reduxThunk),
);

const persistor = persistStore(store);

export {store as default, persistor};
