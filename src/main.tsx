import { createRoot } from 'react-dom/client';
import './main.scss';
import { App } from './app/App';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(<App />);
