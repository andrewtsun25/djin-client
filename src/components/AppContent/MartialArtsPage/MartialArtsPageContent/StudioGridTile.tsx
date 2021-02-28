import LaunchIcon from '@material-ui/icons/Launch';
import { useDocument } from '@nandorojo/swr-firestore';
import { ResponsiveGridItem } from 'components/shared/ResponsiveGrid';
import firebase from 'firebase';
import { isNil } from 'lodash';
import React from 'react';
import { MartialArtsStudio } from 'types/martialArts';
import { isNotNil } from 'utils/general';

type DocumentReference = firebase.firestore.DocumentReference;

interface StudioGridTileProps {
    studioRef: DocumentReference;
}

const StudioGridTile: React.FC<StudioGridTileProps> = ({ studioRef }: StudioGridTileProps) => {
    const { data: studio, error } = useDocument<MartialArtsStudio>(studioRef.path);
    const loading = isNil(studio);
    const isError: boolean = isNotNil(error) || !studio?.exists;
    const title = isError ? 'Studio Unavailable' : loading ? 'Loading Studio...' : studio?.name || 'Unnamed Studio';
    const subtitle = isError ? 'City Unavailable' : loading ? 'Loading State...' : studio?.city || 'Unnamed City';

    return (
        <ResponsiveGridItem
            downloadUrl={studio?.studioUrl}
            mediaUrl={studio?.logoUrl}
            title={title}
            subtitle={subtitle}
            icon={<LaunchIcon />}
            loading={loading}
            error={isError}
            mediaSizingStrategy="contain"
        />
    );
};

export default StudioGridTile;
