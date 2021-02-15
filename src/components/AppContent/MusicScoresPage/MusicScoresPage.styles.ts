import { createStyles, makeStyles } from '@material-ui/core/styles';
import musicScoreBg from 'assets/music/media/music_score_bg.jpeg';

const musicScoresPageStyles = makeStyles(() =>
    createStyles({
        pageTitle: {
            padding: 10,
        },
        bg: {
            backgroundImage: `url(${musicScoreBg})`,
            paddingBottom: 10,
        },
    }),
);

export default musicScoresPageStyles;
