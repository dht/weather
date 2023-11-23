import { createRoot } from 'react-dom/client';
import { api, initApi } from './api/apiWeather';
import { App } from './app/App';
import './main.scss';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

const apiKey = import.meta.env.VITE_API_KEY;

initApi(apiKey);

root.render(<App />);
