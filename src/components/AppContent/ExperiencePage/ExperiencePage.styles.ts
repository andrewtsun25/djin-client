import { createStyles, makeStyles } from '@material-ui/core/styles';

const experiencePageStyles = makeStyles(() =>
    createStyles({
        pageTitle: {
            textAlign: 'center',
        },
        resumeInfo: {
            margin: '10px auto',
        },
    }),
);

export default experiencePageStyles;
