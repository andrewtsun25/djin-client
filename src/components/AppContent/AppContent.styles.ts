import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GlobalStyles from 'const/styling';

const appContentStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -GlobalStyles.DrawerWidth,
            minHeight: '100vh',
            [`@media (min-width: ${theme.breakpoints.values.xs}) and (orientation: landscape)`]: {
                minHeight: 'calc(100vh - 46px)',
            },
            [`@media (min-width: ${theme.breakpoints.values.sm})`]: {
                minHeight: 'calc(100vh - 64px)',
            },
        },
        shift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
    }),
);

export default appContentStyles;
