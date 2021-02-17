import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const musicScoreGridStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: fade(theme.palette.background.paper, 0.75),
            margin: `20px auto`,
            padding: 10,
            borderRadius: 10,
        },
        gridHeader: {
            margin: `5px auto 5px 5px`,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        instrumentImg: {
            width: '100%',
            paddingTop: '100%',
            position: 'relative',
            backgroundSize: 'contain',
        },
    }),
);

export default musicScoreGridStyles;
