import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const employmentCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 10,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        jobChip: {
            marginBottom: 10,
        },
    }),
);

export default employmentCardStyles;
