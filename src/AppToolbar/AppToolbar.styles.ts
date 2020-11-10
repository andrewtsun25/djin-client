import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Constants from "../utils/constants";

const { DRAWER_WIDTH } = Constants;

const appToolbarStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  shift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  }
}));

export default appToolbarStyles;
