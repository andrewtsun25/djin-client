import { Link as ExternalLink, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { Link as InternalLink } from 'react-router-dom';

import iconLinkStyles from './IconLink.styles';

interface IconLinkProps {
    icon: JSX.Element;
    href?: string;
    text: string;
    className?: string;
    style?: CSSProperties;
    internal?: boolean;
    target?: string;
}

const ICON_LINK_ARIA_LABEL = 'Hyperlink With Icon';

const IconLink: React.FC<IconLinkProps> = ({
    icon,
    href,
    text,
    className,
    style,
    internal = false,
    target = '_blank',
}: IconLinkProps) => {
    const classes = iconLinkStyles();
    return internal ? (
        <InternalLink
            to={href || 'about:blank'}
            className={clsx(classes.internalLink, className)}
            style={style}
            target={target}
            rel="noopener noreferrer"
            aria-label={ICON_LINK_ARIA_LABEL}
        >
            <div className={classes.iconContainer}>{icon}</div>
            <Typography>{text}</Typography>
        </InternalLink>
    ) : (
        <ExternalLink
            href={href}
            className={clsx(classes.externalLink, className)}
            style={style}
            target={target}
            rel="noopener noreferrer"
            aria-label={ICON_LINK_ARIA_LABEL}
        >
            <div className={classes.iconContainer}>{icon}</div>
            <Typography>{text}</Typography>
        </ExternalLink>
    );
};

export { ICON_LINK_ARIA_LABEL, IconLink };
export type { IconLinkProps };
