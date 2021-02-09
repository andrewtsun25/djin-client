import { createStyles, makeStyles } from '@material-ui/core/styles';

const holisticOfficePageStyles = makeStyles(() =>
    createStyles({
        architecturePaper: {
            padding: 10,
            margin: 10,
        },
        holisticOfficeImgContainer: {
            display: 'flex',
            justifyItems: 'center',
            width: '100%',
        },
        holisticOfficeImg: {
            maxWidth: '100%',
            padding: 10,
            margin: '10px auto',
        },
        holisticOfficeImgLink: {
            margin: '30px auto',
        },
        pageHeading: {
            margin: '30px auto',
        },
    }),
);

export default holisticOfficePageStyles;