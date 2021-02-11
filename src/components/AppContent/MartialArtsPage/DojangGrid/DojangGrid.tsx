import { GridList, GridListTile, GridListTileBar, IconButton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LaunchIcon from '@material-ui/icons/Launch';
import React from 'react';
import { Dojang } from 'types/martialArts';

import dojangGridStyles from './DojangGrid.styles';

interface DojangGridProps {
    dojangs: Dojang[];
}

const COL_HEIGHT = 333;

const DojangGrid: React.FC<DojangGridProps> = ({ dojangs }: DojangGridProps) => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const classes = dojangGridStyles();
    const cols = isLarge ? 4 : isMedium ? 2 : 1;
    return (
        <div className={classes.root}>
            <Typography variant="h2" align="center" className={classes.studioGridTitle}>
                Studios
            </Typography>
            <GridList cellHeight={COL_HEIGHT} cols={cols}>
                {dojangs.map(({ name, href, logoUrl, location }: Dojang) => (
                    <GridListTile key={name} cols={1} rows={1}>
                        <img src={logoUrl} alt={`${name} Logo`} className={classes.dojangImg} />
                        <GridListTileBar
                            title={name}
                            subtitle={location}
                            actionIcon={
                                <IconButton
                                    aria-label={name}
                                    className={classes.icon}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LaunchIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default DojangGrid;
