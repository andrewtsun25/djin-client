import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from 'const/styling';

const appToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
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
        },
        homeLink: {
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        },
        logo: {
            maxHeight: theme.typography.h3.fontSize,
            marginRight: `0.5rem`,
        },
    }),
);

export default appToolbarStyles;
