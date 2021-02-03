import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppToolbar from './AppToolbar';
import AppDrawer from './AppDrawer';
import AppContent from "./AppContent";
import useAppRootStyles from "./App.styles";

const App: React.FC = () => {
  const classes = useAppRootStyles();
  const [isAppDrawerOpen, setAppDrawerOpen] = useState(false);
  const openAppDrawer = () => setAppDrawerOpen(true);
  const closeAppDrawer = () => setAppDrawerOpen(false);
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
