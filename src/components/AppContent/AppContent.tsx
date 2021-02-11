import clsx from 'clsx';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EduType } from 'types/education';
import { MartialArtsStyle } from 'types/martialArts';

import { About } from './About';
import appContentStyles from './AppContent.styles';
import EducationPage from './EducationPage';
import ErrorPage from './ErrorPage';
import ExperiencePage from './ExperiencePage';
import HBVResearchPage from './HBVResearchPage';
import HolisticOfficePage from './HolisticOfficePage';
import HomePage from './HomePage';
import MartialArtsPage from './MartialArtsPage';
import MusicScoresPage from './MusicScoresPage';
import ProjectsPage from './ProjectsPage';
import ReclaimerPage from './ReclaimerPage';

interface AppContentProps {
    isAppDrawerOpen: boolean;
}

const AppContent: React.FC<AppContentProps> = ({ isAppDrawerOpen }: AppContentProps) => {
    const classes = appContentStyles();
    return (
        <main className={clsx(classes.root, isAppDrawerOpen && classes.shift)}>
            <div className={classes.drawerHeader} />
            <Switch>
                <Route path="/coding/experience">
                    <ExperiencePage />
                </Route>
                <Route path="/coding/education">
                    <EducationPage eduType={EduType.CODING} />
                </Route>
                <Route path="/coding/projects">
                    <ProjectsPage />
                </Route>
                <Route path="/academic/hbv">
                    <HBVResearchPage />
                </Route>
                <Route path="/academic/holisticOffice">
                    <HolisticOfficePage />
                </Route>
                <Route path="/academic/reclaimer">
                    <ReclaimerPage />
                </Route>
                <Route path="/music/education">
                    <EducationPage eduType={EduType.MUSIC} />
                </Route>
                <Route path="/music/scores">
                    <MusicScoresPage />
                </Route>
                <Route path="/martialArts/itfTaekwondo">
                    <MartialArtsPage martialArtsStyle={MartialArtsStyle.ITF_TKD} />
                </Route>
                <Route path="/martialArts/wtTaekwondo">
                    <MartialArtsPage martialArtsStyle={MartialArtsStyle.WT_TKD} />
                </Route>
                <Route path="/martialArts/haidongGumdo">
                    <MartialArtsPage martialArtsStyle={MartialArtsStyle.HDGD} />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </main>
    );
};

export default AppContent;
