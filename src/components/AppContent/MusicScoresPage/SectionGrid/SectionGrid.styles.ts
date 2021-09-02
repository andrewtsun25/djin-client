import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const sectionGridStyles = makeStyles((theme: Theme) =>
    createStyles({
        grid: {
            backgroundColor: alpha(theme.palette.background.paper, 0.75),
            padding: 10,
            borderRadius: 10,
            margin: `20px auto`,
        },
    }),
);

export default sectionGridStyles;
