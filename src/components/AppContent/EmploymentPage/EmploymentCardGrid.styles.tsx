import { createStyles, makeStyles } from '@material-ui/core/styles';

const employmentCardGridStyles = makeStyles(() =>
    createStyles({
        filterButtonsRow: {
            display: 'flex',
            justifyContent: 'center',
            margin: '10px 10px 20px',
        },
        filterButton: {
            margin: '0 5px',
        },
    }),
);
export default employmentCardGridStyles;
