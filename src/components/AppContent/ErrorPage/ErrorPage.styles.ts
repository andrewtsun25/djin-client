import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import errorBg from 'assets/error/media/error_bg.png';

const errorPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        pageContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        contrastText: {
            color: theme.palette.primary.contrastText,
        },
        bg: {
            backgroundImage: `url(${errorBg})`,
        },
        errorImg: {
            maxWidth: '50%',
            maxHeight: '40%',
        },
    }),
);

export default errorPageStyles;
