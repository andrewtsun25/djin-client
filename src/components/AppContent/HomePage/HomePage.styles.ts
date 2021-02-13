import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import aboutBg from 'assets/about/media/about_bg.jpg';

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
            backgroundColor: fade(theme.palette.common.white, 0.7),
            borderRadius: 20,
            padding: 15,
        },
        contrastText: {
            color: theme.palette.primary.contrastText,
        },
        bg: {
            backgroundImage: `url(${aboutBg})`,
        },
    }),
);

export default homePageStyles;
