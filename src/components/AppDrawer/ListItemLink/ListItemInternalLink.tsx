import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { Location, LocationDescriptor } from 'history';
import React, { ForwardedRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

import listItemLinkStyles from './ListItemLink.styles';

interface NestedListItemProps {
    icon: React.ReactNode;
    text: string;
    to: LocationDescriptor | ((location: Location) => LocationDescriptor);
    nested?: boolean;
}

const ListItemInternalLink: React.FC<NestedListItemProps> = ({ icon, text, to, nested }: NestedListItemProps) => {
    const classes = listItemLinkStyles();
    const ReactRouterLink = useMemo(
        () =>
            React.forwardRef<HTMLAnchorElement>(function internalLinkRenderer(
                linkProps,
                ref: ForwardedRef<HTMLAnchorElement>,
            ) {
                return <Link ref={ref} to={to} {...linkProps} />;
            }),
        [to],
    );
    return (
        <ListItem button className={clsx(nested && classes.nested)} component={ReactRouterLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
};

export default ListItemInternalLink;
