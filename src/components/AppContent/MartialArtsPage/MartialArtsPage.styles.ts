import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import studioBg from 'assets/martialArts/media/studio_bg.png';

const martialArtsPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        bg: {
            backgroundImage: `url(${studioBg})`,
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
            margin: '1rem auto',
        },
    }),
);

export default martialArtsPageStyles;
