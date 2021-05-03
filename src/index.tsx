import './index.css';
import 'firebase/firestore';

import { MuiThemeProvider } from '@material-ui/core';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { fuego } from './api/fuego';
import App from './components';
import djinTheme from './components/theme';
import { unregister } from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <MuiThemeProvider theme={djinTheme}>
                <FuegoProvider fuego={fuego}>
                    <QueryParamProvider ReactRouterRoute={Route}>
                        <App />
                    </QueryParamProvider>
                </FuegoProvider>
            </MuiThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
