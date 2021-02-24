import { createStyles, makeStyles } from '@material-ui/core/styles';

const loadingViewStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            margin: 20,
        },
    }),
);

export default loadingViewStyles;
