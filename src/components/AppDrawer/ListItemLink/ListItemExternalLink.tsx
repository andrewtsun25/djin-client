import React, {ForwardedRef, useMemo} from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import listItemLinkStyles from "./ListItemLink.styles";
import clsx from "clsx";

interface NestedListItemProps {
    icon: React.ReactNode;
    text: string;
    href: string;
    nested?: boolean;
}

const ListItemExternalLink: React.FC<NestedListItemProps> =  ({ icon, text, href, nested }: NestedListItemProps) => {
    const classes = listItemLinkStyles();
    const ExternalLink = useMemo(() =>
        React.forwardRef<HTMLAnchorElement>(function externalLinkRenderer(linkProps, ref: ForwardedRef<HTMLAnchorElement>) {
            return <a target="_blank" ref={ref} href={href} rel="noopener noreferrer" {...linkProps}/>
        }), [href]);
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
