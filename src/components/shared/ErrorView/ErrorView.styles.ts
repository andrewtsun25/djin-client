import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const errorViewStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        root: {
            backgroundColor: fade(theme.palette.error.light, 0.4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 20,
            padding: 20,
            width: 'max-content',
        },
        stackTrace: {
            whiteSpace: 'pre',
        },
    }),
);

export default errorViewStyles;
