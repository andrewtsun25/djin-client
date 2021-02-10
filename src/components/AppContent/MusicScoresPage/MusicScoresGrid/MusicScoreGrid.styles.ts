import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const musicScoreGridStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            margin: `20px auto`,
        },
        gridHeader: {
            margin: `10px auto 10px 10px`,
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
