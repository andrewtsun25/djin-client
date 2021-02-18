import { createStyles, makeStyles } from '@material-ui/core/styles';

const backgroundStyles = makeStyles(() =>
    createStyles({
        bg: {
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            width: `100%`,
        },
        colorBg: {
            minHeight: '100vh',
            padding: 10,
        },
    }),
);

export default backgroundStyles;
