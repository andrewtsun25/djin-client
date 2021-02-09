import { createStyles, makeStyles } from '@material-ui/core/styles';

const iconLinkStyles = makeStyles(() =>
    createStyles({
        link: {
            display: 'flex',
            alignItems: 'center',
        },
        iconContainer: {
            marginRight: 10,
        },
    }),
);

export default iconLinkStyles;
