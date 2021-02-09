import { Link, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

import iconLinkStyles from './IconLink.styles';

interface DocumentLinkProps {
    icon: JSX.Element;
    href?: string;
    text: string;
    className?: string;
}

const IconLink: React.FC<DocumentLinkProps> = ({ icon, href, text, className }: DocumentLinkProps) => {
    const classes = iconLinkStyles();
    return (
        <Link href={href} className={clsx(classes.link, className)} target="_blank" rel="noopener noreferrer">
            <div className={classes.iconContainer}>{icon}</div>
            <Typography>{text}</Typography>
        </Link>
    );
};

export default IconLink;
