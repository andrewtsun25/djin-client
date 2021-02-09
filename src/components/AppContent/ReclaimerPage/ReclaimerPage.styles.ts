import { createStyles, makeStyles } from '@material-ui/core/styles';

const reclaimerPageStyles = makeStyles(() =>
    createStyles({
        centeringContainer: {
            display: 'flex',
            justifyItems: 'center',
            width: '100%',
        },
        reclaimerImg: {
            maxWidth: '100%',
            padding: 10,
            margin: '10px auto',
        },
        reclaimerPlayLink: {
            margin: '1em auto',
        },
        reclaimerLink: {
            margin: '0 auto',
        },
    }),
);

export default reclaimerPageStyles;
