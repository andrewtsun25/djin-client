import appToolbarStyles from "./AppToolbar.styles";
import { Toolbar, AppBar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";

interface AppToolbarProps {
  isAppDrawerOpen: boolean,
  openAppDrawer(): void;
};

const AppToolbar: React.FC<AppToolbarProps> = ({ isAppDrawerOpen, openAppDrawer } : AppToolbarProps) => {
  // @ts-ignore
  const classes = appToolbarStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openAppDrawer}
          edge="start"
          className={clsx(classes.menuButton, isAppDrawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Dominic Taeyong Jin
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
