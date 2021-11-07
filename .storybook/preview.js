import djinTheme from '../src/components/theme';
import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';
import { QueryParamProvider } from 'use-query-params';

import 'react-awesome-query-builder/lib/css/styles.css';
import { FirebaseProvider } from '../src/api/provider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
};

export const decorators = [
    (StoryComponent) => (
        <Router>
            <MuiThemeProvider theme={djinTheme}>
                <FirebaseProvider>
                    <QueryParamProvider ReactRouterRoute={Route}>
                        <StoryComponent />
                    </QueryParamProvider>
                </FirebaseProvider>
            </MuiThemeProvider>
        </Router>
    ),
];
