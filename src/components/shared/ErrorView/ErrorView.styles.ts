import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const errorViewStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.background.paper,
        },
        content: {
            margin: 20,
        },
        colorApplication: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 'max-content',
            backgroundColor: alpha(theme.palette.error.light, 0.4),
            padding: 20,
        },
        stackTrace: {
            whiteSpace: 'pre',
        },
    }),
);

export default errorViewStyles;
