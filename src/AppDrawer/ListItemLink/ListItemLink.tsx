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
    to: LocationDescriptor | ((location: Location) => LocationDescriptor);
    nested?: boolean;
}

const ListItemLink: React.FC<NestedListItemProps> =  ({ icon, text, to, nested }: NestedListItemProps) => {
    const classes = listItemLinkStyles();
    const CustomLink = useMemo(
        () =>
            React.forwardRef<HTMLAnchorElement>((linkProps, ref) => (
                <Link ref={ref} to={to} {...linkProps} />
            )),
        [to],
    );
    return (
        <ListItem button className={clsx(nested && classes.nested)} component={CustomLink}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
}

export default ListItemLink;
