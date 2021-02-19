import { Typography } from '@material-ui/core';
import Background from 'components/shared/Background';
import React from 'react';
import { Link } from 'react-router-dom';

import errorPageStyles from './ErrorPage.styles';

const errorChickens = 'https://storage.googleapis.com/storage.djin.dev/error/img/angry_chickens.png';
const errorBg = 'https://storage.googleapis.com/storage.djin.dev/error/bg/ff7_cloud_sephiroth_bg.png';

const ErrorPage: React.FC = () => {
    const classes = errorPageStyles();
    return (
        <Background imageUrl={errorBg} tint={false} className={classes.center}>
            <div className={classes.pageContent}>
                <img src={errorChickens} alt="Angry Chickens" className={classes.errorImg} />
                <Typography paragraph variant="h3" align="center" className={classes.contrastText}>
                    Nothing to see here.
                </Typography>
                <Link to="/" className={classes.contrastText}>
                    <Typography paragraph variant="h5" align="center">
                        Move along.
                    </Typography>
                </Link>
            </div>
        </Background>
    );
};

export default ErrorPage;
