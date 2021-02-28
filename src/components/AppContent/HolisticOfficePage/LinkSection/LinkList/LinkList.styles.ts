import { createStyles, makeStyles } from '@material-ui/core/styles';

const linkListStyles = makeStyles(() =>
    createStyles({
        linkList: {
            listStyleType: 'none',
        },
        link: {
            color: '#308575',
        },
    }),
);

export default linkListStyles;
