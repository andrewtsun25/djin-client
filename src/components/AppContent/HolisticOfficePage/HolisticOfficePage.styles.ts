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
            border: '3px solid #2ab573',
            borderRadius: 5,
        },
        holisticOfficeImgLink: {
            margin: '30px auto',
        },
        pageHeading: {
            margin: '30px auto',
        },
        bg: {
            backgroundColor: '#e2f1e9',
            padding: 10,
        },
    }),
);

export default holisticOfficePageStyles;
