import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const environment = import.meta.env.VITE_ENVIRONMENT;  // Access the ENV variable

console.log("environment " , environment);

if (environment === 'production' || environment === 'development') {
  import('./styles/index.css'); // Import regular CSS for development
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>    
    <App />   
  </React.StrictMode>,
);
