import React, {PropsWithChildren, useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {Collapse} from "@material-ui/core";
import List from "@material-ui/core/List";

interface NestedListProps {
    icon: React.ReactNode;
    text: string;
}

const NestedList: React.FC<NestedListProps> = ({ icon, text, children }: PropsWithChildren<NestedListProps>) => {
    const [isListOpen, setListOpen] = useState(false);
    const handleListOpen = () => setListOpen(!isListOpen);
    return (
        <List>
            <ListItem button onClick={handleListOpen}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
                {isListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isListOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    { children }
                </List>
            </Collapse>
        </List>
    );
}

export default NestedList;
