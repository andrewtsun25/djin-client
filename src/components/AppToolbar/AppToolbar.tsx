import React from 'react';
import { Toolbar, AppBar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
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
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={openAppDrawer}
                    edge="start"
                    className={clsx(classes.menuButton, isAppDrawerOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    d.jin
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;
