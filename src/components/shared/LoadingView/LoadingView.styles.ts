import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const loadingViewStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            margin: 20,
        },
        colorApplication: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: alpha(theme.palette.warning.light, 0.4),
            padding: 20,
            width: 'max-content',
        },
    }),
);

export default loadingViewStyles;
