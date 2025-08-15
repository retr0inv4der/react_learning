// src/main.tsx
import * as React from 'react';
import * as  ReactDOM from 'react-dom/client';
import App from './App'; 
 // optional, can delete if unused

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
