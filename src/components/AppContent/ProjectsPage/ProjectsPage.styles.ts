import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import matrixBg from 'assets/projects/media/matrix_bg.png';

const projectPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageTitle: {
            padding: 10,
            color: theme.palette.primary.contrastText,
        },
        bg: {
            backgroundImage: `url(${matrixBg})`,
        },
        colorBg: {
            backgroundColor: fade(theme.palette.common.black, 0.5),
            padding: 10,
        },
    }),
);

export default projectPageStyles;
