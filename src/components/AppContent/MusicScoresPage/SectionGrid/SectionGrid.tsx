import { Zoom } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import useInstruments from 'api/music/useInstruments';
import ErrorView from 'components/shared/ErrorView';
import { ResponsiveGrid, ResponsiveGridItem } from 'components/shared/ResponsiveGrid';
import { isNil, map } from 'lodash';
import React, { useMemo } from 'react';
import { InstrumentType, MusicScore } from 'types/music';
import { isNotNil } from 'utils/general';

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
                // Default state is loading state
                let name = 'Loading Instrument Name...';
                let mediaUrl;
                // Success state of instruments
                if (instruments) {
                    const instrument = instruments.get(instrumentType as InstrumentType);
                    if (instrument) {
                        name = instrument.name;
                        mediaUrl = instrument.mediaUrl;
                    }
                } else if (isNotNil(error)) {
                    name = 'Unknown Instrument';
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
                    titleHref={trackUrl}
                    className={classes.grid}
                />
            </Zoom>
        </>
    );
};

export default SectionGrid;
