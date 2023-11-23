import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import mockForecast from './response.forecast.json';
import mockAutoComplete from './response.autocomplete.json';

const BASE_URL = 'http://dataservice.accuweather.com/';

let instance: AxiosInstance,
  apiKey: string = '',
  mockApi: boolean = false;

export const initApi = (key: string, mock: boolean = true) => {
  instance = axios.create({
    baseURL: BASE_URL,
  });

  apiKey = key;
  mockApi = mock;
};

export const getLocationsFake = async (_q: string) => {
  await delay(100);
  return { data: mockAutoComplete };
};

export const getForecastFake = async (_locationKey: string) => {
  await delay(100);
  return { data: mockForecast };
};

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// curl -X GET "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=XXX&q=tel"
export const getLocations = (q: string) => {
  if (mockApi) {
    return getLocationsFake(q);
  }

  return invokeApi(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`);
};

// curl -X GET "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=XXX"
export const getForecast = async (locationKey: string) => {
  if (mockApi) {
    return getForecastFake(locationKey);
  }

  return invokeApi(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`);
};

export const invokeApi = (path: string) => {
  return instance
    .get(path)
    .then((res) => {
      return {
        isSuccess: true,
        data: res.data,
        error: '',
      };
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(`Error: ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        toast.error(`Error: ${error.message}`);
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error(`Error: ${error.message}`);
      }

      return {
        isSuccess: false,
        data: {},
        error: error.message,
      };
    });
};

export const api = {
  getLocations,
  getForecast,
};

// const response = await api.getLocations('tel');
// const response = await api.getForecast('215854');
