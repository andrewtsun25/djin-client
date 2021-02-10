import { GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import InstrumentUrls from 'const/music/InstrumentUrls';
import { map } from 'lodash';
import React from 'react';
import { Instrument, MusicScore } from 'types/music';

import musicScoreGridStyles from './MusicScoreGrid.styles';

interface MusicScoreGridProps {
    musicScore: MusicScore;
}

const MusicScoreGrid: React.FC<MusicScoreGridProps> = ({ musicScore: { title, parts } }: MusicScoreGridProps) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.up('md'));
    const isMedium = useMediaQuery(theme.breakpoints.up('lg'));
    const classes = musicScoreGridStyles();
    const cols = isMedium ? 4 : isSmall ? 2 : 1;
    return (
        <div className={classes.root}>
            <GridList cellHeight={500} cols={cols}>
                <GridListTile key="Subheader" cols={cols} style={{ height: 'auto' }}>
                    <Typography paragraph variant="h5" className={classes.gridHeader}>
                        {title}
                    </Typography>
                </GridListTile>
                {map(parts, (downloadUrl, instrument: Instrument) => {
                    const scoreName = `${title} - ${instrument} Score`;
                    return (
                        <GridListTile key={instrument} cols={1} rows={1}>
                            <img src={InstrumentUrls?.[instrument]} alt={scoreName} className={classes.instrumentImg} />
                            <GridListTileBar
                                title={instrument}
                                actionIcon={
                                    <IconButton
                                        aria-label={`Download ${scoreName}`}
                                        className={classes.icon}
                                        href={downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CloudDownloadIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    );
                })}
            </GridList>
        </div>
    );
};

export default MusicScoreGrid;
