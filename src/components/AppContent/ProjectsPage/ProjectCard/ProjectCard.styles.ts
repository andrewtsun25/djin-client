import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const projectCardStyles = makeStyles((theme: Theme) =>
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
    }),
);

export default projectCardStyles;
