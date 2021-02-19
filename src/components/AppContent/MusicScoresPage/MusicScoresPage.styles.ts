import { createStyles, makeStyles } from '@material-ui/core/styles';

const musicScoresPageStyles = makeStyles(() =>
    createStyles({
        pageTitle: {
            padding: 20,
        },
        bg: {
            paddingBottom: 10,
            width: '100vw',
        },
    }),
);

export default musicScoresPageStyles;
