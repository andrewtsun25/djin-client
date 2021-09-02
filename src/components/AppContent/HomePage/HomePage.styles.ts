import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const homePageStyles = makeStyles((theme: Theme) =>
    createStyles({
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        pageContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '60%',
            backgroundColor: alpha(theme.palette.common.white, 0.7),
            borderRadius: 20,
            padding: 15,
        },
        contrastText: {
            color: theme.palette.primary.contrastText,
        },
    }),
);

export default homePageStyles;
