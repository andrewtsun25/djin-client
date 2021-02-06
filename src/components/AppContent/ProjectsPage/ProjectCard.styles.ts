import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const projectCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 10,
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
        projectLink: {
            display: 'flex',
            alignItems: 'center',
        },
        projectLinkIcon: {
            marginRight: 10,
        },
    }),
);

export default projectCardStyles;
