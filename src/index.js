import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPreferencePage from './UserPreferencePage.jsx'
import ProfileCreationPage from './ProfileCreationPage.jsx';
import VerifyEmailPage from './EmailVerification/VerifyEmailPage.jsx';
import SignupPage from './Signup/SignupPage.jsx';
import App from './App.js';
import store from "./reducers/store.js";
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

