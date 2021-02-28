import { createStyles, makeStyles } from '@material-ui/core/styles';

const linkSectionStyles = makeStyles(() =>
    createStyles({
        title: {
            margin: '30px auto',
        },
        linkSection: {
            width: '100%',
        },
    }),
);

export default linkSectionStyles;
