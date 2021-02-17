import { Container, Typography } from '@material-ui/core';
import errorChickens from 'assets/error/media/error_chickens.png';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import sharedStyles from '../../shared/shared.styles';
import errorPageStyles from './ErrorPage.styles';

const ErrorPage: React.FC = () => {
    const classes = errorPageStyles();
    const shared = sharedStyles();
    return (
        <div className={clsx(shared.bg, classes.bg)}>
            <Container maxWidth="lg" className={classes.center}>
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
            </Container>
        </div>
    );
};

export default ErrorPage;
