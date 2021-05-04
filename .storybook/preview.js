import djinTheme from '../src/components/theme';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import { fuego } from '../src/api/fuego';
import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import 'react-awesome-query-builder/lib/css/styles.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
};

export const decorators = [
    (StoryComponent) => (
        <Router>
            <MuiThemeProvider theme={djinTheme}>
                <FuegoProvider fuego={fuego}>
                    <QueryParamProvider ReactRouterRoute={Route}>
                        <StoryComponent />
                    </QueryParamProvider>
                </FuegoProvider>
            </MuiThemeProvider>
        </Router>
    ),
];
