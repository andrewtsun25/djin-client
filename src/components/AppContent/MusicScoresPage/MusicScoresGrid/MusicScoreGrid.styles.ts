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
        gridList: {
            width: 500,
            height: 450,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        instrumentImg: {
            maxHeight: `100%`,
            objectFit: 'cover',
        },
    }),
);

export default musicScoreGridStyles;
