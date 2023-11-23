import { Store } from './types';

export const initialState: Store = {
  appState: {
    isDarkMode: false,
    useCelsius: true,
  },
  dailyForecasts: [],
  locations: {},
};
