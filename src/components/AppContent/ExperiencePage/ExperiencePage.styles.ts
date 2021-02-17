import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import andurilBg from 'assets/experience/media/anduril_22m_bg.jpeg';

const experiencePageStyles = makeStyles((theme: Theme) =>
    createStyles({
        bg: {
            backgroundImage: `url(${andurilBg})`,
        },
        colorBg: {
            backgroundColor: fade(theme.palette.common.black, 0.5),
            padding: 10,
        },
        pageTitle: {
            textAlign: 'center',
            padding: 20,
        },
        resumeInfo: {
            margin: '10px auto',
        },
        contrastText: {
            color: theme.palette.primary.contrastText,
        },
        resumeLink: {
            textDecoration: 'underline',
            '&:hover': {
                color: theme.palette.primary.light,
            },
        },
    }),
);
export default experiencePageStyles;
