import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const projectPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageTitle: {
            padding: 10,
            color: theme.palette.primary.contrastText,
        },
    }),
);

export default projectPageStyles;
