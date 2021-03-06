import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GlobalStyles from 'const/styling';

const appDrawerStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: GlobalStyles.DrawerWidth,
            flexShrink: 0,
        },
        paper: {
            width: GlobalStyles.DrawerWidth,
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
    }),
);

export default appDrawerStyles;
