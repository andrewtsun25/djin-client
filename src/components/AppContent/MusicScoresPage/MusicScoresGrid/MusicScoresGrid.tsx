import { Zoom } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MusicAPI from 'api/MusicAPI';
import ErrorView from 'components/shared/ErrorView';
import { ResponsiveGrid, ResponsiveGridItem } from 'components/shared/ResponsiveGrid';
import { map } from 'lodash';
import React, { useMemo } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { MusicScore } from 'types/music';
import { Instrument } from 'types/music/Instrument';

import musicScoresGridStyles from './MusicScoresGrid.styles';

interface MusicScoresGridProps {
    musicScore: MusicScore;
}

type SectionInfo = {
    name: string;
    mediaUrl: string;
    scoreUrl: string;
};

const MusicScoresGrid: React.FC<MusicScoresGridProps> = ({
    musicScore: { name, sections, trackUrl },
}: MusicScoresGridProps) => {
    const classes = musicScoresGridStyles();
    const [instruments, loading, error] = useCollectionDataOnce<Instrument>(MusicAPI.getInstruments());
    const sectionInfos: SectionInfo[] = useMemo(
        () =>
            map(sections, (href, instrumentType) => {
                let name = 'Unknown Instrument';
                let mediaUrl = 'Image not available';
                if (instruments) {
                    const instrument = instruments.find((instrument) => instrument.type === instrumentType);
                    if (instrument) {
                        name = instrument.name;
                        mediaUrl = instrument.mediaUrl;
                    }
                } else if (loading) {
                    name = 'Loading Instrument Name...';
                    mediaUrl = 'Getting Image URL...';
                }
                return {
                    name,
                    mediaUrl,
                    scoreUrl: href,
                };
            }),
        [instruments, sections, loading],
    );
    const renderGridTile = ({ name, mediaUrl, scoreUrl }: SectionInfo): JSX.Element => (
        <ResponsiveGridItem
            downloadUrl={scoreUrl}
            title={name}
            icon={<CloudDownloadIcon />}
            mediaUrl={mediaUrl}
            loading={loading}
            error={error}
            mediaSizingStrategy="cover"
        />
    );

    return (
        <>
            {error && <ErrorView error={error} message="An error occurred when retrieving instrument information." />}
            <Zoom in>
                <ResponsiveGrid
                    items={sectionInfos}
                    renderGridTile={renderGridTile}
                    title={name}
                    titleHref={trackUrl}
                    className={classes.grid}
                />
            </Zoom>
        </>
    );
};

export default MusicScoresGrid;
