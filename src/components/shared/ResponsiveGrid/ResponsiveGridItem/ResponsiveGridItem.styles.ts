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
            width: '24%',
            maxHeight: 333,
            margin: 5,
        },
    }),
);

export default responsiveGridItemStyles;
