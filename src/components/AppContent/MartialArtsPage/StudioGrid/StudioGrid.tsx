import { Typography } from '@material-ui/core';
import firebase from 'firebase';
import React from 'react';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';

import studioGridStyles from './StudioGrid.styles';

type DocumentReference = firebase.firestore.DocumentReference;

interface StudioGridProps {
    studiosRef: DocumentReference;
}

const StudioGrid: React.FC<StudioGridProps> = ({ studiosRef }: StudioGridProps) => {
    const [studios, loading, error] = useDocumentDataOnce(studiosRef);
    const classes = studioGridStyles();

    return (
        <div className={classes.root}>
            <Typography paragraph>Studios: {JSON.stringify(studios)}</Typography>
            <Typography paragraph>Loading: {loading}</Typography>
            <Typography paragraph>Error: {error}</Typography>
        </div>
    );
};

export default StudioGrid;
