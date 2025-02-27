import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from './theme/provider';
import App from './App';

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
