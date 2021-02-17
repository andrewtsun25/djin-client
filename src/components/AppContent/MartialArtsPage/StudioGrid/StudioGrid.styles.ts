import { createStyles, makeStyles } from '@material-ui/core/styles';

const studioGridStyles = makeStyles(() =>
    createStyles({
        root: {
            margin: `20px auto`,
        },
        studioGridTitle: {
            margin: `1rem auto`,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        studioImg: {
            maxWidth: `95%`,
            objectFit: 'contain',
        },
    }),
);

export default studioGridStyles;
