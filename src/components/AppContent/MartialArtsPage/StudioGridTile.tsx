import LaunchIcon from '@material-ui/icons/Launch';
import { ResponsiveGridItem } from 'components/shared/ResponsiveGrid';
import firebase from 'firebase';
import React from 'react';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { MartialArtsStudio } from 'types/martialArts';

type DocumentReference = firebase.firestore.DocumentReference;

interface StudioGridTileProps {
    studioRef: DocumentReference;
}

const StudioGridTile: React.FC<StudioGridTileProps> = ({ studioRef }: StudioGridTileProps) => {
    const [studio, loading, error] = useDocumentDataOnce<MartialArtsStudio>(studioRef);
    const title = loading ? 'Loading Studio...' : error ? 'Studio Unavailable' : studio?.name || 'Unnamed Studio';
    const subtitle = loading ? 'Loading State...' : error ? 'City Unavailable' : studio?.city || 'Unnamed City';

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
