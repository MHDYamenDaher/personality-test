import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { BASE_ROUTE } from './utilities/constants';
import getQuery from './utilities/query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={getQuery()}>
      <Router basename={BASE_ROUTE}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
