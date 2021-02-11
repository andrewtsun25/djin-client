import { GridList, GridListTile, GridListTileBar, IconButton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LaunchIcon from '@material-ui/icons/Launch';
import React from 'react';
import { Studio } from 'types/martialArts';

import studioGridStyles from './StudioGrid.styles';

interface StudioGridProps {
    studios: Studio[];
}

const COL_HEIGHT = 333;

const StudioGrid: React.FC<StudioGridProps> = ({ studios }: StudioGridProps) => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const classes = studioGridStyles();
    const cols = isLarge ? 4 : isMedium ? 2 : 1;
    return (
        <div className={classes.root}>
            <Typography variant="h2" align="center" className={classes.studioGridTitle}>
                Studios
            </Typography>
            <GridList cellHeight={COL_HEIGHT} cols={cols}>
                {studios.map(({ name, href, logoUrl, location }: Studio) => (
                    <GridListTile key={name} cols={1} rows={1}>
                        <img src={logoUrl} alt={`${name} Logo`} className={classes.studioImg} />
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

export default StudioGrid;
