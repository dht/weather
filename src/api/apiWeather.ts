import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'http://dataservice.accuweather.com/';

let instance: AxiosInstance,
  apiKey: string = '';

export const initApi = (key: string) => {
  instance = axios.create({
    baseURL: BASE_URL,
  });

  apiKey = key;
};

// curl -X GET "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=XXX&q=tel"
export const getLocations = (q: string) => {
  return invokeApi(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`);
};

// curl -X GET "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=XXX"
export const getForecast = async (locationKey: string) => {
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
