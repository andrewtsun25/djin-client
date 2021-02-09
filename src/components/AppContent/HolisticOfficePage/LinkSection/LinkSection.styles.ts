import { createStyles, makeStyles } from '@material-ui/core/styles';

const linkSectionStyles = makeStyles(() =>
    createStyles({
        title: {
            margin: '30px auto',
        },
        linkList: {
            listStyleType: 'none',
        },
    }),
);

export default linkSectionStyles;
