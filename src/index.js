import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Login from './components/Login.js';
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from './reportWebVitals';
import customTheme from "./utils/theme.js";
import HomePage from './components/HomePage';
import Project from './components/Project';
import BwTheme from './components/BwTheme';
import Form from './components/Form';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Profile/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
