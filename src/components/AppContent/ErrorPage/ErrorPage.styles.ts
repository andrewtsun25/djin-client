import { createStyles, makeStyles } from '@material-ui/core/styles';

const errorPageStyles = makeStyles(() =>
    createStyles({
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        pageContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }),
);

export default errorPageStyles;
