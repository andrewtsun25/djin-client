import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const responsiveGridItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: fade(theme.palette.common.white, 0.54),
        },
        media: {
            objectFit: 'contain',
            objectPosition: '50% 50%',
        },
        tile: {
            maxHeight: 333,
            margin: 5,
        },
        loadingContainer: {
            height: 333,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: fade(theme.palette.common.black, 0.7),
        },
        errorContainer: {
            height: 333,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: fade(theme.palette.error.light, 0.25),
        },
    }),
);

export default responsiveGridItemStyles;
