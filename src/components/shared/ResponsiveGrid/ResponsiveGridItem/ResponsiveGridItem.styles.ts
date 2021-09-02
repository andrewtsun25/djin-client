import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const responsiveGridItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: alpha(theme.palette.common.white, 0.54),
        },
        media: {
            width: '100%',
            paddingBottom: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: theme.palette.common.white,
        },
        loadingContainer: {
            width: '100%',
            paddingBottom: '100%',
            backgroundColor: alpha(theme.palette.common.black, 0.7),
        },
        errorContainer: {
            width: '100%',
            paddingBottom: '100%',
            backgroundColor: alpha(theme.palette.error.light, 0.25),
        },
        absoluteCenter: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
        },
        errorIcon: {
            fontSize: 150,
        },
    }),
);

export default responsiveGridItemStyles;
