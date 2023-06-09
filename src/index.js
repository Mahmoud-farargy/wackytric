import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import '../node_modules/normalize.css/normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { light } from "./styles/Themes";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles/>
    <ThemeProvider theme={light}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
