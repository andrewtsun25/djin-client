import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const martialArtsPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageHeading: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: `1rem`,
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
        title: {
            margin: '0 50px',
        },
        rank: {
            marginBottom: '3rem',
        },
    }),
);

export default martialArtsPageStyles;
