import { createStyles, makeStyles } from '@material-ui/core/styles';

const educationCardStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 10,
            margin: 10,
        },
        title: {
            textAlign: 'center',
        },
    }),
);

export default educationCardStyles;
