import { createStyles, makeStyles } from '@material-ui/core/styles';

const martialArtsPageStyles = makeStyles(() =>
    createStyles({
        pageHeading: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: `20px auto`,
        },
        pageContent: {
            whiteSpace: 'pre-line',
            margin: `20px 0`,
        },
        introduction: {
            fontStyle: 'italic',
        },
        info: {
            width: '66%',
        },
        picContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        styleLogoImg: {
            flexShrink: 1,
        },
        title: {
            margin: `0 20px`,
        },
    }),
);

export default martialArtsPageStyles;
