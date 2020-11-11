import React, {useMemo} from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import listItemLinkStyles from "./ListItemLink.styles";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {LocationDescriptor, Location} from 'history';

interface NestedListItemProps {
    icon: React.ReactNode;
    text: string;
    href: string;
    nested?: boolean;
}

const ListItemExternalLink: React.FC<NestedListItemProps> =  ({ icon, text, href, nested }: NestedListItemProps) => {
    const classes = listItemLinkStyles();
    const ExternalLink = useMemo(() =>
        React.forwardRef<HTMLAnchorElement>((linkProps, ref) =>
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            (<a target="_blank" ref={ref} href={href} rel="noopener noreferrer" {...linkProps}/>)
        ), [href]);
    return (
        <ListItem button
                  className={clsx(nested && classes.nested)}
                  component={ExternalLink}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
}

export default ListItemExternalLink;
