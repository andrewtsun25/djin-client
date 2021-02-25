import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const responsiveGridStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            padding: 10,
            maxWidth: '100vw',
        },
        gridHeader: {
            margin: `5px auto 5px 5px`,
        },
    }),
);

export default responsiveGridStyles;
