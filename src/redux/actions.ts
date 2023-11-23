import { AppState, DailyForecasts, Location, Locations } from './types';

export const patchAppState = (payload: Partial<AppState>) => ({
  type: 'PATCH_APP_STATE',
  payload,
});

export const setLocations = (payload: Partial<Locations>) => ({
  type: 'SET_LOCATIONS',
  payload,
});

export const patchLocation = (id: string, payload: Partial<Location>) => ({
  type: 'PATCH_LOCATION',
  id,
  payload,
});

export const setForecasts = (payload: DailyForecasts) => ({
  type: 'SET_FORECASTS',
  payload,
});
