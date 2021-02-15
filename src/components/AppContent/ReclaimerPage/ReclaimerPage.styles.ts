import { createStyles, makeStyles } from '@material-ui/core/styles';
import reclaimerBg from 'assets/reclaimer/media/reclaimer_bg.png';

const reclaimerPageStyles = makeStyles(() =>
    createStyles({
        centeringContainer: {
            display: 'flex',
            justifyItems: 'center',
            width: '100%',
        },
        reclaimerImg: {
            maxWidth: '100%',
            padding: 10,
            margin: '10px auto',
            border: '3px solid #ba4ef8',
            borderRadius: 10,
        },
        reclaimerPlayLink: {
            margin: '1em auto',
        },
        reclaimerLink: {
            margin: '0 auto',
        },
        reclaimerBg: {
            backgroundImage: `url(${reclaimerBg})`,
            color: '#bba0d9',
            paddingBottom: 10,
        },
        reclaimerLinkText: {
            color: '#ba4ef8',
        },
    }),
);

export default reclaimerPageStyles;
