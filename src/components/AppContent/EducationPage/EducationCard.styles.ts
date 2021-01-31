import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const educationCardStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: 10,
        margin: 10
    },
    title: {
        textAlign: "center"
    }
}));

export default educationCardStyles;
