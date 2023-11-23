import { combineReducers, createStore } from 'redux';
import { appStateReducer, dailyForecastsReducer, locationsReducer } from './reducers';
import { Store } from './types';

export let store: any;

export const initStore = (initialState: Store) => {
  console.log('initialState ->', initialState);

  const rootReducer = combineReducers({
    appState: appStateReducer,
    dailyForecasts: dailyForecastsReducer,
    locations: locationsReducer,
  });

  store = createStore(rootReducer, initialState);
};
