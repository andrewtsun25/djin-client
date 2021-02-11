import { createStyles, makeStyles } from '@material-ui/core/styles';

const dojangGridStyles = makeStyles(() =>
    createStyles({
        root: {
            margin: `20px auto`,
        },
        studioGridTitle: {
            margin: `20px auto`,
        },
        gridList: {
            width: 500,
            height: 450,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        dojangImg: {
            maxWidth: `100%`,
            objectFit: 'contain',
        },
    }),
);

export default dojangGridStyles;
