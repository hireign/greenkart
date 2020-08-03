import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      ...green,
      contrastText: "#FFFFFF"
    },
    third: purple
  },
});

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <ThemeProvider
        theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
