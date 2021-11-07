import './index.css';
import 'firebase/firestore';

import { MuiThemeProvider } from '@material-ui/core';
import { FirebaseProvider } from 'api/provider';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import App from './components';
import ScrollToTop from './components/ScrollToTop';
import djinTheme from './components/theme';
import { unregister } from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <MuiThemeProvider theme={djinTheme}>
                <FirebaseProvider>
                    <QueryParamProvider ReactRouterRoute={Route}>
                        <App />
                    </QueryParamProvider>
                </FirebaseProvider>
            </MuiThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
