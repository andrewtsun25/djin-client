import LaunchIcon from '@material-ui/icons/Launch';
import { useDocument } from 'api/firestore';
import { ResponsiveGridItem } from 'components/shared/ResponsiveGrid';
import Collections from 'const/collections';
import { isNil } from 'lodash';
import React from 'react';
import { DocumentReference } from 'types/firebase/firestore';
import { MartialArtsStudio } from 'types/martialArts';

interface StudioGridTileProps {
    studioRef: DocumentReference;
}

const StudioGridTile: React.FC<StudioGridTileProps> = ({ studioRef }: StudioGridTileProps) => {
    const { data: studio, error } = useDocument<MartialArtsStudio>(Collections.MartialArts.Studios, studioRef.path);
    const loading = isNil(studio);
    const title = error ? 'Studio Unavailable' : loading ? 'Loading Studio...' : studio?.name || 'Unnamed Studio';
    const subtitle = error ? 'City Unavailable' : loading ? 'Loading State...' : studio?.city || 'Unnamed City';

    return (
        <ResponsiveGridItem
            downloadUrl={studio?.studioUrl}
            mediaUrl={studio?.logoUrl}
            title={title}
            subtitle={subtitle}
            icon={<LaunchIcon />}
            loading={loading}
            error={error}
            mediaSizingStrategy="contain"
        />
    );
};

export default StudioGridTile;
