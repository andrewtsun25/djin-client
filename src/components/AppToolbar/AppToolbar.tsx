import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import logo from 'logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

import appToolbarStyles from './AppToolbar.styles';

interface AppToolbarProps {
    isAppDrawerOpen: boolean;
    openAppDrawer(): void;
}

const AppToolbar: React.FC<AppToolbarProps> = ({ isAppDrawerOpen, openAppDrawer }: AppToolbarProps) => {
    const classes = appToolbarStyles();
    return (
        <AppBar position="fixed" className={clsx(classes.root, isAppDrawerOpen && classes.shift)}>
            <Toolbar>
                {!isAppDrawerOpen && (
                    <IconButton
                        color="inherit"
                        aria-label="Open Drawer Button"
                        onClick={openAppDrawer}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Link to="/" className={classes.homeLink}>
                    <img src={logo} alt="d.jin website logo" className={classes.logo} />
                    <Typography variant="h6" noWrap>
                        d.jin
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;
