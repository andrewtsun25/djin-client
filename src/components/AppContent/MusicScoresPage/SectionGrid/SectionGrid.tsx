import { Zoom } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { useInstruments } from 'api/music';
import ErrorView from 'components/shared/ErrorView';
import { ResponsiveGrid, ResponsiveGridItem } from 'components/shared/ResponsiveGrid';
import { isNil, map } from 'lodash';
import React, { useMemo } from 'react';
import { InstrumentType, MusicScore } from 'types/music';

import sectionGridStyles from './SectionGrid.styles';

interface MusicScoresGridProps {
    musicScore: MusicScore;
}

type SectionInfo = {
    name: string;
    mediaUrl?: string;
    scoreUrl: string;
    type: string;
};

const SectionGrid: React.FC<MusicScoresGridProps> = ({
    musicScore: { name: scoreName, sections, trackUrl },
}: MusicScoresGridProps) => {
    const classes = sectionGridStyles();
    const { instruments, error } = useInstruments();
    const sectionInfos: SectionInfo[] = useMemo(
        () =>
            map(sections, (href, instrumentType) => {
                // Default state is that instrument is unknown.
                let name = 'Unknown Instrument';
                let mediaUrl;
                // If instrument data for all instruments is available, attempt to query it.
                if (instruments) {
                    const instrument = instruments.get(instrumentType as InstrumentType);
                    // Use instrument data if it can be found.
                    if (instrument) {
                        name = instrument.name;
                        mediaUrl = instrument.mediaUrl;
                    }
                }
                // Error has not been triggered, we're actually loading. Else, display error.
                else {
                    name = isNil(error) ? 'Loading...' : 'Instrument unavailable';
                }
                return {
                    name,
                    mediaUrl,
                    scoreUrl: href,
                    type: instrumentType,
                };
            }),
        [instruments, sections, error],
    );
    const renderGridTile = ({ name: instrumentName, mediaUrl, scoreUrl, type }: SectionInfo): JSX.Element => (
        <ResponsiveGridItem
            downloadUrl={scoreUrl}
            title={instrumentName}
            icon={<CloudDownloadIcon />}
            mediaUrl={mediaUrl}
            loading={isNil(instruments)}
            error={error}
            mediaSizingStrategy="cover"
            key={`${scoreName}.${type}`}
        />
    );

    return (
        <>
            {error && <ErrorView error={error} message="An error occurred when retrieving instrument information." />}
            <Zoom in>
                <ResponsiveGrid
                    items={sectionInfos}
                    renderGridTile={renderGridTile}
                    title={scoreName}
                    className={classes.grid}
                    embedUrl={trackUrl}
                />
            </Zoom>
        </>
    );
};

export default SectionGrid;
