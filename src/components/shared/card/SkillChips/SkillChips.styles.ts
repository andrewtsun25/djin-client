import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const skillChipsStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
);

export default skillChipsStyles;
