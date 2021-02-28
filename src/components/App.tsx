import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import { fuego } from 'api/fuego';
import React, { useState } from 'react';

import useAppRootStyles from './App.styles';
import AppContent from './AppContent';
import AppDrawer from './AppDrawer';
import AppToolbar from './AppToolbar';
import djinTheme from './theme';

const App: React.FC = () => {
    const classes = useAppRootStyles();
    const [isAppDrawerOpen, setAppDrawerOpen] = useState(false);
    const openAppDrawer: () => void = () => setAppDrawerOpen(true);
    const closeAppDrawer: () => void = () => setAppDrawerOpen(false);
    return (
        <MuiThemeProvider theme={djinTheme}>
            <FuegoProvider fuego={fuego}>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppToolbar isAppDrawerOpen={isAppDrawerOpen} openAppDrawer={openAppDrawer} />
                    <AppDrawer isAppDrawerOpen={isAppDrawerOpen} closeAppDrawer={closeAppDrawer} />
                    <AppContent isAppDrawerOpen={isAppDrawerOpen} />
                </div>
            </FuegoProvider>
        </MuiThemeProvider>
    );
};

export default App;
