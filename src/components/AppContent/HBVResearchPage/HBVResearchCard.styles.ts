import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const hbvResearchCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '10px auto',
            padding: 10,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        skillChipContainer: {
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        skillChip: {
            margin: '10 auto',
        },
        link: {
            color: '#308574',
        },
        iconContainer: {
            marginRight: 10,
        },
    }),
);

export default hbvResearchCardStyles;
