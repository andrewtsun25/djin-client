import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const educationPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: `10px 0`,
        },
        colorBg: {
            backgroundColor: fade(theme.palette.common.black, 0.5),
            minHeight: '100vh',
            padding: 10,
        },
        pageTitle: {
            padding: 10,
            color: theme.palette.primary.contrastText,
        },
    }),
);

export default educationPageStyles;
