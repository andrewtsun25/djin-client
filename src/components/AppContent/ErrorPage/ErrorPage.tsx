import { Container, Typography } from '@material-ui/core';
import errorChickens from 'assets/error/media/error_chickens.png';
import React from 'react';
import { Link } from 'react-router-dom';

import errorPageStyles from './ErrorPage.styles';

const ErrorPage: React.FC = () => {
    const classes = errorPageStyles();
    return (
        <Container maxWidth="lg" className={classes.center}>
            <div className={classes.pageContent}>
                <img src={errorChickens} alt="Angry Chickens" />
                <Typography paragraph variant="h4" align="center">
                    You probably caught these chickens at a bad time.
                </Typography>
                <Link to="/">
                    <Typography paragraph variant="h6" align="center">
                        Give the chickens some privacy.
                    </Typography>
                </Link>
            </div>
        </Container>
    );
};

export default ErrorPage;
