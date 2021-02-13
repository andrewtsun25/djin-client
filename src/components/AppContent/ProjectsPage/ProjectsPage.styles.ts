import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
    }),
);

export default projectPageStyles;
