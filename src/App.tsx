import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppToolbar from './AppToolbar/AppToolbar';
import AppDrawer from './AppDrawer/AppDrawer';
import AppContent from "./AppContent/AppContent";
import appRootStyles from "./App.styles";

const App = () => {
  const classes = appRootStyles();
  const [isAppDrawerOpen, setAppDrawerOpen] = useState(false);
  const openDrawer = () => setAppDrawerOpen(true);
  const closeDrawer = () => setAppDrawerOpen(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppToolbar isAppDrawerOpen={isAppDrawerOpen} openAppDrawer={openDrawer} />
      <AppDrawer isAppDrawerOpen={isAppDrawerOpen} closeAppDrawer={closeDrawer} />
      <AppContent isAppDrawerOpen={isAppDrawerOpen} />
    </div>
  );
};

export default App;
