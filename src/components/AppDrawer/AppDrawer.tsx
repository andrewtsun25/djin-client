import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { useTheme } from '@material-ui/core/styles';
import AlbumIcon from '@material-ui/icons/Album';
import AppsIcon from '@material-ui/icons/Apps';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeIcon from '@material-ui/icons/Code';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GitHubIcon from '@material-ui/icons/GitHub';
import HeadsetIcon from '@material-ui/icons/Headset';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SchoolIcon from '@material-ui/icons/School';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
import WorkIcon from '@material-ui/icons/Work';
import { FistIcon, KatanaIcon, MusicScoreIcon, StorybookIcon, TaekwondoIcon } from 'components/icons';
import React from 'react';

import appDrawerStyles from './AppDrawer.styles';
import { ListItemExternalLink, ListItemInternalLink } from './ListItemLink';
import NestedList from './NestedList';

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
                {isAppDrawerOpen && (
                    <IconButton onClick={closeAppDrawer} aria-label={'Close Drawer Button'}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                )}
            </div>
            <Divider />
            <List>
                <NestedList icon={<CodeIcon />} text="Coding">
                    <ListItemInternalLink icon={<WorkIcon />} text="Employment" to="/coding/employment" nested />
                    <ListItemInternalLink icon={<SchoolIcon />} text="Education" to="/coding/education" nested />
                    <ListItemInternalLink icon={<AppsIcon />} text="Projects" to="/coding/projects" nested />
                    <ListItemExternalLink
                        icon={<LinkedInIcon />}
                        text="LinkedIn"
                        href="https://linkedin.com/in/andrewtsun25"
                        nested
                    />
                    <ListItemExternalLink
                        icon={<GitHubIcon />}
                        text="GitHub"
                        href="https://github.com/andrewtsun25"
                        nested
                    />
                </NestedList>
                <NestedList icon={<SchoolIcon />} text="Academic Work">
                    <ListItemInternalLink icon={<LocalHospitalIcon />} text="HBV Research" to="/academic/hbv" nested />
                    <ListItemInternalLink
                        icon={<LocalPharmacyIcon />}
                        text="Holistic Office"
                        to="/academic/holisticOffice"
                        nested
                    />
                    <ListItemInternalLink
                        icon={<SportsEsportsIcon />}
                        text="Reclaimer"
                        to="/academic/reclaimer"
                        nested
                    />
                </NestedList>
                <NestedList icon={<MusicNoteIcon />} text="Music">
                    <ListItemInternalLink icon={<SchoolIcon />} text="Education" to="/music/education" nested />
                    <ListItemInternalLink icon={<AlbumIcon />} text="EDM" to="/music/edm" nested />
                    <ListItemInternalLink icon={<MusicScoreIcon />} text="Classical Music" to="/music/scores" nested />
                    <ListItemExternalLink
                        icon={<HeadsetIcon />}
                        text="SoundCloud"
                        href="https://soundcloud.com/djtaeyong"
                        nested
                    />
                </NestedList>
                <NestedList icon={<SportsMmaIcon />} text="Martial Arts">
                    <ListItemInternalLink
                        icon={<FistIcon />}
                        text="ITF Taekwondo"
                        to="/martialArts/itfTaekwondo"
                        nested
                    />
                    <ListItemInternalLink
                        icon={<TaekwondoIcon />}
                        text="WT Taekwondo"
                        to="/martialArts/wtTaekwondo"
                        nested
                    />
                    <ListItemInternalLink
                        icon={<KatanaIcon />}
                        text="Haidong Gumdo"
                        to="/martialArts/haidongGumdo"
                        nested
                    />
                </NestedList>
                <Divider />
                <List>
                    <ListItemExternalLink
                        icon={<ContactMailIcon />}
                        text="Contact"
                        href="mailto:djtaeyong@gmail.com"
                        nested
                    />
                    <ListItemExternalLink
                        icon={<StorybookIcon />}
                        text="Site Storybook"
                        href="https://storybook.djin.dev"
                        nested
                    />
                </List>
            </List>
        </Drawer>
    );
};

export default AppDrawer;
