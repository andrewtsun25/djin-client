import 'react-awesome-query-builder/lib/css/styles.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';

import useAppRootStyles from './App.styles';
import AppContent from './AppContent';
import AppDrawer from './AppDrawer';
import AppToolbar from './AppToolbar';

const App: React.FC = () => {
    const classes = useAppRootStyles();
    const [isAppDrawerOpen, setAppDrawerOpen] = useState(false);
    const openAppDrawer: () => void = () => setAppDrawerOpen(true);
    const closeAppDrawer: () => void = () => setAppDrawerOpen(false);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppToolbar isAppDrawerOpen={isAppDrawerOpen} openAppDrawer={openAppDrawer} />
            <AppDrawer isAppDrawerOpen={isAppDrawerOpen} closeAppDrawer={closeAppDrawer} />
            <AppContent isAppDrawerOpen={isAppDrawerOpen} />
        </div>
    );
};

export default App;
