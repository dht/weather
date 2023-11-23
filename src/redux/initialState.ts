import { Store } from './types';

export const initialState: Store = {
  appState: {
    isDarkMode: false,
    useCelsius: true,
  },
  currentLocation: {
    Version: 1,
    Key: '215854',
    Type: 'City',
    Rank: 31,
    LocalizedName: 'Tel Aviv',
    Country: {
      ID: 'IL',
      LocalizedName: 'Israel',
    },
    AdministrativeArea: {
      ID: 'TA',
      LocalizedName: 'Tel Aviv',
    },
    isFavorite: false,
  },
  dailyForecasts: [],
  favorites: {},
};
