import { Action, AppState, DailyForecasts, Location, Locations } from './types';

export const appStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'PATCH_APP_STATE':
      return { ...state, ...action.payload };
    default:
      return state ?? {};
  }
};

export const locationReducer = (state: Location, action: Action) => {
  switch (action.type) {
    case 'PATCH_LOCATION':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const locationsReducer = (state: Locations, action: Action) => {
  switch (action.type) {
    case 'SET_LOCATIONS':
      return action.payload;
    case 'PATCH_LOCATION':
      return {
        ...state,
        [action.id!]: locationReducer(state[action.id!], action),
      };

    default:
      return state ?? {};
  }
};

export const dailyForecastsReducer = (state: DailyForecasts, action: Action) => {
  switch (action.type) {
    case 'SET_FORECASTS':
      return action.payload;
    default:
      return state ?? [];
  }
};
