import { createRoot } from 'react-dom/client';
import { initApi } from './api/apiWeather';
import { App } from './app/App';
import './main.scss';
import { initialState } from './redux/initialState';
import { initStore } from './redux/store';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

const apiKey = import.meta.env.VITE_API_KEY;

initApi(apiKey);
initStore(initialState);

root.render(<App />);
