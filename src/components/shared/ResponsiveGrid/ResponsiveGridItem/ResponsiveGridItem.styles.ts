import { createStyles, makeStyles } from '@material-ui/core/styles';

const responsiveGridItemStyles = makeStyles(() =>
    createStyles({
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        media: {
            width: '100%',
            paddingTop: '100%',
            position: 'relative',
            backgroundSize: 'contain',
        },
    }),
);

export default responsiveGridItemStyles;
