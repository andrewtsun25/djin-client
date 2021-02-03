import { createStyles, makeStyles } from '@material-ui/core/styles';

const martialArtsPageStyles = makeStyles(() =>
    createStyles({
        pageHeading: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        pageContent: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 50%)',
            whiteSpace: 'pre-line',
        },
        info: {
            width: '66%',
        },
        pic: {
            width: '100%',
            padding: 50,
        },
        picImg: {
            width: '100%',
        },
        picCaption: {
            textAlign: 'center',
        },
        dojangGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 25%)',
            justifyItems: 'center',
            alignItems: 'center',
        },
    }),
);

export default martialArtsPageStyles;
