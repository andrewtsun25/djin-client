import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const iconLinkStyles = makeStyles((theme: Theme) => {
    const baseLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        margin: '1em 0',
    };
    return createStyles({
        internalLink: {
            ...baseLinkStyle,
            color: theme.palette.primary.main,
        },
        externalLink: baseLinkStyle,
        iconContainer: {
            marginRight: 10,
        },
    });
});

export default iconLinkStyles;
