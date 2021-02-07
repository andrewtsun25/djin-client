import { createStyles, makeStyles } from '@material-ui/core/styles';

const hbvResearchPageStyles = makeStyles(() =>
    createStyles({
        pageTitle: {
            textAlign: 'center',
        },
        contentParagraph: {
            margin: '20px auto',
        },
        italicizedParagraph: {
            margin: '20px auto',
            fontStyle: 'italic',
        },
    }),
);

export default hbvResearchPageStyles;
