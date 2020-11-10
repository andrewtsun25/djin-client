import React, {useState} from "react";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
import FaceIcon from '@material-ui/icons/Face';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AppsIcon from '@material-ui/icons/Apps';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HeadsetIcon from '@material-ui/icons/Headset';
import DescriptionIcon from '@material-ui/icons/Description';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import {Collapse} from "@material-ui/core";
import appDrawerStyles from "./AppDrawer.styles";

interface AppDrawerProps {
  closeAppDrawer(): void;
  isAppDrawerOpen: boolean;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ closeAppDrawer, isAppDrawerOpen }: AppDrawerProps) => {
  const classes = appDrawerStyles();
  const theme = useTheme();
  const [isCodeOpen, setCodeOpen] = useState(false);
  const [isMusicOpen, setMusicOpen] = useState(false);
  const [isTkdOpen, setTkdOpen] = useState(false);
  const handleCodeOpen = () => setCodeOpen(!isCodeOpen);
  const handleMusicOpen = () => setMusicOpen(!isMusicOpen);
  const handleTkdOpen = () => setTkdOpen(!isTkdOpen);
  return (
    <Drawer
      className={classes.root}
      variant="persistent"
      anchor="left"
      open={isAppDrawerOpen}
      classes={{
        paper: classes.paper,
      }}
    >
      <div className={classes.header}>
        <IconButton onClick={closeAppDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={handleCodeOpen}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Coding" />
          {isCodeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isCodeOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Research" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleMusicOpen}>
          <ListItemIcon>
            <MusicNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Music" />
          {isMusicOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isMusicOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <HeadsetIcon />
              </ListItemIcon>
              <ListItemText primary="Listen" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Download Scores" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleTkdOpen}>
          <ListItemIcon>
            <SportsMmaIcon />
          </ListItemIcon>
          <ListItemText primary="Taekwondo" />
          {isTkdOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isTkdOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="ITF" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="WT" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <FaceIcon/>
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon/>
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default AppDrawer;
