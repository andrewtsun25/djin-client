import { createStyles, makeStyles } from '@material-ui/core/styles';

const projectCardStyles = makeStyles(() =>
    createStyles({
        root: {
            margin: 10,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        projectLink: {
            display: 'flex',
            alignItems: 'center',
        },
        projectLinkIcon: {
            marginRight: 10,
        },
        disclaimer: {
            fontWeight: 'bold',
        },
    }),
);

export default projectCardStyles;
