import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { applyPrefs, loadPrefs } from './lib/reading';
import { hideSplash } from './lib/splash';

applyPrefs(loadPrefs());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

requestAnimationFrame(() => requestAnimationFrame(hideSplash));
