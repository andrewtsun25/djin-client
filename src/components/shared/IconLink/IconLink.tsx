import { Link, Typography } from '@material-ui/core';
import React from 'react';

import iconLinkStyles from './IconLink.styles';

interface DocumentLinkProps {
    icon: JSX.Element;
    href?: string;
    text: string;
}

const IconLink: React.FC<DocumentLinkProps> = ({ icon, href, text }: DocumentLinkProps) => {
    const classes = iconLinkStyles();
    return (
        <Typography paragraph>
            <Link href={href} className={classes.link} target="_blank" rel="noopener noreferrer">
                <div className={classes.iconContainer}>{icon}</div>
                {text}
            </Link>
        </Typography>
    );
};

export default IconLink;
