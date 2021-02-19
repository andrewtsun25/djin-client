import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const employmentPageStyles = makeStyles((theme: Theme) =>
    createStyles({
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
export default employmentPageStyles;
