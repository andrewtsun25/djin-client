import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Constants from "../utils/constants";

const { DRAWER_WIDTH } = Constants;

const appDrawerStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  paper: {
    width: DRAWER_WIDTH,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default appDrawerStyles;
