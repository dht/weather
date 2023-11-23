import { createSelector } from 'reselect';
import { Store } from './types';
import { get } from 'lodash';
import dayjs from 'dayjs';

export const $i = (state: Store) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawAppState = createSelector($i, (state: Store) =>state.appState); // prettier-ignore
export const $rawFavorites = createSelector($i, (state: Store) =>state.favorites); // prettier-ignore
export const $rawCurrentLocation = createSelector($i, (state: Store) =>state.currentLocation); // prettier-ignore
export const $rawDailyForecasts = createSelector($i, (state: Store) =>state.dailyForecasts); // prettier-ignore

export const $forecasts = createSelector(
  $rawAppState,
  $rawDailyForecasts,
  (appState, forecasts) => {
    const { useCelsius } = appState;

    return forecasts.map((forecast) => {
      const date = get(forecast, 'EpochDate') * 1000;
      const dayOfWeek = dayjs(date).format('ddd');
      const fahrenheit = get(forecast, 'Temperature.Maximum.Value');
      const celsius = Math.round(((fahrenheit - 32) * 5) / 9);

      const degrees = useCelsius ? celsius : fahrenheit;

      return {
        date,
        dayOfWeek,
        degrees,
      };
    });
  }
);
