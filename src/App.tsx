import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { makeStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Drew Taeyong Jin
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default App;
