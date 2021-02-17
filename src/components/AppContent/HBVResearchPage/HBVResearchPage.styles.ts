import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import teamHbvBg from 'assets/research/media/team_hbv_bg.png';

const hbvResearchPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageTitle: {
            paddingTop: 20,
            textAlign: 'center',
            color: theme.palette.primary.contrastText,
        },
        contentParagraph: {
            margin: '20px auto',
            color: theme.palette.primary.contrastText,
        },
        italicizedParagraph: {
            margin: '20px auto',
            fontStyle: 'italic',
        },
        contrastText: {
            color: theme.palette.primary.contrastText,
        },
        bg: {
            backgroundImage: `url(${teamHbvBg})`,
            backgroundColor: '#308575',
        },
        colorBg: {
            backgroundColor: fade(theme.palette.common.black, 0.3),
            height: '100%',
            paddingBottom: 10,
        },
    }),
);

export default hbvResearchPageStyles;
