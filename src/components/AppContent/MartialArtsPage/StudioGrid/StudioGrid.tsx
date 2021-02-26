import { GridList, GridListTile, GridListTileBar, Grow, IconButton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LaunchIcon from '@material-ui/icons/Launch';
import useMartialArtsStudios from 'hooks/useMartialArtsStudios';
import React from 'react';
import { MartialArtsStudio, StudioIds } from 'types/martialArts';

import studioGridStyles from './StudioGrid.styles';

interface StudioGridProps {
    studios: StudioIds[];
}

const COL_HEIGHT = 333;

const StudioGrid: React.FC<StudioGridProps> = ({ studios }: StudioGridProps) => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const classes = studioGridStyles();
    const martialArtsStudios = useMartialArtsStudios();
    const cols = isLarge ? 4 : isMedium ? 2 : 1;
    return (
        <div className={classes.root}>
            <Typography variant="h2" align="center" className={classes.studioGridTitle}>
                Studios
            </Typography>
            <GridList cellHeight={COL_HEIGHT} cols={cols}>
                {studios.map((studioId: StudioIds) => {
                    const martialArtsStudio: MartialArtsStudio | undefined = martialArtsStudios.find(
                        (studio) => studio.id === studioId,
                    );
                    return (
                        <Grow in key={studioId}>
                            <GridListTile cols={1} rows={1}>
                                <img
                                    src={martialArtsStudio?.logoUrl}
                                    alt={`${martialArtsStudio?.name} Logo`}
                                    className={classes.studioImg}
                                />
                                <GridListTileBar
                                    title={martialArtsStudio?.name}
                                    subtitle={martialArtsStudio?.city}
                                    actionIcon={
                                        <IconButton
                                            className={classes.icon}
                                            href={martialArtsStudio?.studioUrl || 'https://example.com'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LaunchIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        </Grow>
                    );
                })}
            </GridList>
        </div>
    );
};

export default StudioGrid;
