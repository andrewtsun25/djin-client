import { createStyles, makeStyles } from '@material-ui/core/styles';

const responsiveGridStyles = makeStyles(() =>
    createStyles({
        root: {
            margin: `20px auto`,
        },
        gridHeader: {
            margin: `5px auto 5px 5px`,
        },
    }),
);

export default responsiveGridStyles;
