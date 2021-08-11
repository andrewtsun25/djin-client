import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const backgroundStyles = makeStyles((theme: Theme) => {
    const bgHeight = {
        height: 'calc(100% - 55px)',
        [`@media (min-width: ${theme.breakpoints.values.xs}) and (orientation: landscape)`]: {
            minHeight: 'calc(100% - 46px)',
        },
        [`@media (min-width: ${theme.breakpoints.values.sm})`]: {
            minHeight: 'calc(100% - 64px)',
        },
    };
    return createStyles({
        bg: {
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            width: '100%',
            ...bgHeight,
        },
        colorBg: {
            padding: 10,
            ...bgHeight,
        },
    });
});

export default backgroundStyles;
