import React from "react";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
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
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import appDrawerStyles from "./AppDrawer.styles";
import NestedList from "./NestedList";
import ListItemLink from "./ListItemLink";

interface AppDrawerProps {
  closeAppDrawer(): void;
  isAppDrawerOpen: boolean;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ closeAppDrawer, isAppDrawerOpen }: AppDrawerProps) => {
  const classes = appDrawerStyles();
  const theme = useTheme();
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
        <NestedList icon={<CodeIcon />} text="Coding">
          <ListItemLink icon={<WorkIcon />} text="Experience" to="/coding/experience" nested/>
          <ListItemLink icon={<SchoolIcon />} text="Education" to="/coding/education" nested/>
          <ListItemLink icon={<AppsIcon />} text="Projects" to="/coding/projects" nested/>
          <ListItemLink icon={<LocalLibraryIcon />} text="Research" to="/coding/research" nested/>
          <ListItemLink icon={<LinkedInIcon />} text="LinkedIn" to={{pathname: "https://linkedin.com/in/andrewtsun25"}} nested/>
          <ListItemLink icon={<GitHubIcon />} text="GitHub" to={{pathname: "https://github.com/andrewtsun25"}} nested/>
        </NestedList>
        <NestedList icon={<MusicNoteIcon />} text="Music">
          <ListItemLink icon={<SchoolIcon />} text="Education" to="/music/education" nested/>
          <ListItemLink icon={<HeadsetIcon />} text="SoundCloud" to={{pathname: "https://soundcloud.com/djtaeyong"}} nested/>
          <ListItemLink icon={<DescriptionIcon />} text="Download Scores" to="/music/scores" nested/>
        </NestedList>
        <NestedList icon={<SportsMmaIcon />} text="Taekwondo">
          <ListItemLink icon={<FitnessCenterIcon />} text="ITF" to="/taekwondo/itf" nested/>
          <ListItemLink icon={<FitnessCenterIcon />} text="WT" to="/taekwondo/wt" nested/>
        </NestedList>
      <Divider />
        <List>
          <ListItemLink icon={<FaceIcon/>} text="About" to="/about" nested/>
          <ListItemLink icon={<ContactMailIcon/>} text="Contact" to={{pathname: "mailto:djtaeyong@gmail.com"}} nested/>
        </List>
      </List>
    </Drawer>
  );
}

export default AppDrawer;
