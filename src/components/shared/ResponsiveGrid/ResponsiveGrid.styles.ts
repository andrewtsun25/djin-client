import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const responsiveGridStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            margin: `20px auto`,
            maxWidth: '100vw',
            padding: 10,
            borderRadius: 10,
        },
        gridHeader: {
            margin: `5px auto 5px 5px`,
        },
    }),
);

export default responsiveGridStyles;
