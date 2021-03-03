import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const edmPageStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageTitle: {
            padding: 20,
            color: theme.palette.primary.contrastText,
        },
        content: {
            '& > iframe': {
                height: 400,
            },
        },
    }),
);

export default edmPageStyles;
