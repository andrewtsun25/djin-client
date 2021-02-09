import { createStyles, makeStyles } from '@material-ui/core/styles';

const iconLinkStyles = makeStyles(() =>
    createStyles({
        link: {
            display: 'flex',
            alignItems: 'center',
            margin: '1em 0',
        },
        iconContainer: {
            marginRight: 10,
        },
    }),
);

export default iconLinkStyles;
