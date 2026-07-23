// Patch window.fetch with getter/setter to safely allow re-assignment by polyfills
try {
  if (typeof window !== 'undefined') {
    let _fetch = window.fetch;
    const safePatch = (target: any) => {
      if (!target) return;
      try {
        Object.defineProperty(target, 'fetch', {
          get: () => _fetch,
          set: (fn) => { _fetch = fn; },
          configurable: true,
          enumerable: true,
        });
      } catch (err) {}
    };
    safePatch(window);
    if (typeof Window !== 'undefined' && Window.prototype) {
      safePatch(Window.prototype);
    }
  }
} catch (e) {}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
