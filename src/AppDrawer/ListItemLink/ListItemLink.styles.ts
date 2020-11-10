import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const listItemLinkStyles = makeStyles((theme: Theme) => createStyles({
    nested: {
        paddingLeft: theme.spacing(4),
    }
}));

export default listItemLinkStyles;
