import { createStyles, makeStyles } from '@material-ui/core/styles';

const backgroundStyles = makeStyles(() =>
    createStyles({
        bg: {
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
        },
        colorBg: {
            padding: 10,
            height: '100%',
        },
    }),
);

export default backgroundStyles;
