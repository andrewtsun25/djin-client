import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import andurilBg from 'assets/experience/media/anduril_22m_bg.jpeg';

const experiencePageStyles = makeStyles((theme: Theme) =>
    createStyles({
        bg: {
            backgroundImage: `url(${andurilBg})`,
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
    }),
);

export default experiencePageStyles;
