import { createStyles, makeStyles } from '@material-ui/core/styles';

const hbvResearchCardStyles = makeStyles(() =>
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
