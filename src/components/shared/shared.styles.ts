import { createStyles, makeStyles } from '@material-ui/core/styles';

const sharedStyles = makeStyles(() =>
    createStyles({
        bg: {
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            width: `100%`,
            minHeight: `100vh`,
        },
    }),
);

export default sharedStyles;
