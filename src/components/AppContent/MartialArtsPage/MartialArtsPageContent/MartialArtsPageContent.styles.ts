import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const martialArtsPageContentStyles = makeStyles((theme: Theme) =>
    createStyles({
        bg: {
            padding: 0,
        },
        contentBg: {
            backgroundColor: fade(theme.palette.common.white, 0.85),
            padding: 10,
        },
        pageHeading: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: `1rem`,
        },
        pageContent: {
            whiteSpace: 'pre-line',
            margin: `20px auto`,
            maxWidth: '95vw',
        },
        description: {
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
            padding: 10,
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
            margin: '1rem auto',
        },
        studioGridRoot: {
            margin: `20px auto`,
        },
        studioGridTitle: {
            margin: `1rem auto`,
        },
    }),
);

export default martialArtsPageContentStyles;
