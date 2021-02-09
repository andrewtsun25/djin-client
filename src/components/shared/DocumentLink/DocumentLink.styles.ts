import { createStyles, makeStyles } from '@material-ui/core/styles';

const documentLinkStyles = makeStyles(() =>
    createStyles({
        paperLink: {
            display: 'flex',
            alignItems: 'center',
        },
        paperLinkIcon: {
            marginRight: 10,
        },
    }),
);

export default documentLinkStyles;
