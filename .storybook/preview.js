import djinTheme from '../src/components/theme';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import { fuego } from '../src/api/fuego';
import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
};

export const decorators = [
    (StoryComponent) => (
        <MuiThemeProvider theme={djinTheme}>
            <FuegoProvider fuego={fuego}>
                <StoryComponent />
            </FuegoProvider>
        </MuiThemeProvider>
    ),
];
