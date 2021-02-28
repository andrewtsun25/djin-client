import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const hbvResearchCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '10px auto',
            padding: 10,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        link: {
            color: '#308574',
        },
        iconContainer: {
            marginRight: 10,
        },
    }),
);

export default hbvResearchCardStyles;
