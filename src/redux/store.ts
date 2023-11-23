import { combineReducers, createStore } from 'redux';
import {
  appStateReducer,
  currentLocationReducer,
  dailyForecastsReducer,
  locationsReducer,
} from './reducers';
import { Store } from './types';

export let store: any;

export const initStore = (initialState: Store) => {
  console.log('initialState ->', initialState);

  const rootReducer = combineReducers({
    appState: appStateReducer,
    dailyForecasts: dailyForecastsReducer,
    currentLocation: currentLocationReducer,
    favorites: locationsReducer,
  });

  store = createStore(rootReducer, initialState);
};
