import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppToolbar from './AppToolbar';
import AppDrawer from './AppDrawer';
import AppContent from "./AppContent";
import useAppRootStyles from "./App.styles";

const App = () => {
  const classes = useAppRootStyles();
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
