import { createSelector } from 'reselect';
import { Json, Store } from './types';
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
    const today = dayjs().startOf('day').set('hour', 7).unix();

    return forecasts.map((forecast) => {
      const epochDate = get(forecast, 'EpochDate');
      const date = dayjs(epochDate * 1000);
      const dayOfWeek = dayjs(date).format('ddd');
      const fahrenheit = get(forecast, 'Temperature.Maximum.Value');
      const celsius = Math.round(((fahrenheit - 32) * 5) / 9);
      const description = get(forecast, 'Day.IconPhrase');

      const degrees = useCelsius ? celsius + '°C' : fahrenheit + '°F';
      const isToday = epochDate === today;

      return {
        date,
        dayOfWeek,
        degrees,
        description,
        isToday,
      };
    });
  }
);

export const $currentWeather = createSelector(
  $rawCurrentLocation,
  $forecasts,
  (location, forecasts) => {
    const forecast = forecasts.find((f) => f.isToday);

    if (!forecast || !location) {
      return {} as Json;
    }

    const cityName = get(location, 'LocalizedName');

    return {
      cityName,
      ...forecast,
    } as Json;
  }
);
