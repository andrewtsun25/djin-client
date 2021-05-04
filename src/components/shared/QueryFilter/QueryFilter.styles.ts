import { createStyles, makeStyles } from '@material-ui/core/styles';

const queryFilterStyles = makeStyles(() =>
    createStyles({
        filterButtonsRow: {
            display: 'flex',
            justifyContent: 'center',
            margin: '10px 10px 20px',
        },
        filterButton: {
            margin: '0 5px',
        },
        applyFilterButton: {
            backgroundColor: '#3DCC91',
            '&:hover': {
                backgroundColor: '#0F9960',
            },
        },
        clearFilterButton: {
            backgroundColor: '#FF7373',
            '&:hover': {
                backgroundColor: '#DB3737',
            },
        },
    }),
);

export default queryFilterStyles;
