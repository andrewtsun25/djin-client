import { makeStyles, createStyles } from '@material-ui/core/styles';

const appRootStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        },
    }),
);

export default appRootStyles;
