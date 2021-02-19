import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
        errorImg: {
            maxWidth: '50%',
            maxHeight: '40%',
        },
    }),
);

export default errorPageStyles;
