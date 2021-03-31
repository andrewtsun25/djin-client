import { Link, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';

import iconLinkStyles from './IconLink.styles';

interface IconLinkProps {
    icon: JSX.Element;
    href?: string;
    text: string;
    className?: string;
    style?: CSSProperties;
}

const ICON_LINK_ARIA_LABEL = 'Hyperlink With Icon';

const IconLink: React.FC<IconLinkProps> = ({ icon, href, text, className, style }: IconLinkProps) => {
    const classes = iconLinkStyles();
    return (
        <Link
            href={href}
            className={clsx(classes.link, className)}
            style={style}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ICON_LINK_ARIA_LABEL}
        >
            <div className={classes.iconContainer}>{icon}</div>
            <Typography>{text}</Typography>
        </Link>
    );
};

export { ICON_LINK_ARIA_LABEL, IconLink };
export type { IconLinkProps };
