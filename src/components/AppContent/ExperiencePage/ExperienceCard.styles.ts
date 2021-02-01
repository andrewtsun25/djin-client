import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const experienceCardStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        margin: 10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

export default experienceCardStyles;
