import { GridList, GridListTile, GridListTileBar, IconButton, Link, Typography, Zoom } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import useInstruments from 'hooks/useInstruments';
import { map } from 'lodash';
import React from 'react';
import { InstrumentType, MusicScore } from 'types/music';
import { Instrument } from 'types/music/Instrument';

import musicScoreGridStyles from './MusicScoreGrid.styles';

interface MusicScoreGridProps {
    musicScore: MusicScore;
}

const COL_HEIGHT = 333;

const MusicScoreGrid: React.FC<MusicScoreGridProps> = ({
    musicScore: { name, parts, trackUrl },
}: MusicScoreGridProps) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const classes = musicScoreGridStyles();
    const cols = isMedium ? 4 : isSmall ? 2 : 1;
    const instruments = useInstruments();
    return (
        <Zoom in>
            <div className={classes.root}>
                <GridList cellHeight={COL_HEIGHT} cols={cols}>
                    <GridListTile key="Subheader" cols={cols} style={{ height: 'auto' }}>
                        <Link href={trackUrl} target="_blank" rel="noopener noreferrer">
                            <Typography paragraph variant="h5" className={classes.gridHeader}>
                                {name}
                            </Typography>
                        </Link>
                    </GridListTile>
                    {map(parts, (downloadUrl, instrumentType: InstrumentType) => {
                        const instrument: Instrument | undefined = instruments.find((i) => i.type === instrumentType);
                        const scoreName = `${name} - ${instrument} Score`;
                        return (
                            <GridListTile key={instrumentType} cols={1} rows={1}>
                                <div
                                    className={classes.instrumentImg}
                                    style={{
                                        backgroundImage: `url(${instrument?.mediaUrl})`,
                                    }}
                                />
                                <GridListTileBar
                                    title={instrument?.name}
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
        </Zoom>
    );
};

export default MusicScoreGrid;
