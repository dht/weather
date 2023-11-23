export type Store = {
  appState: AppState;
  locations: Locations;
  dailyForecasts: DailyForecasts;
};

export type AppState = {
  isDarkMode: boolean;
  useCelsius: boolean;
};

export type Location = {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
  isFavorite: boolean;
};

export type Locations = Record<string, Location>;

export type DailyForecast = {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Sources: string[];
  MobileLink: string;
  Link: string;
};

export type DailyForecasts = DailyForecast[];

export type Action = {
  type: string;
  payload: any;
  id?: string;
};
