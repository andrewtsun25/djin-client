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
        reqLink: {
            display: 'flex',
            alignItems: 'center',
        },
        reqLinkIcon: {
            marginRight: 10,
        },
    }),
);

export default educationCardStyles;
