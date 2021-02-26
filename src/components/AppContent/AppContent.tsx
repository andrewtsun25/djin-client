import clsx from 'clsx';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EduType } from 'types/education';
import { MartialArtsStyleType } from 'types/martialArts';

import appContentStyles from './AppContent.styles';
import EducationPage from './EducationPage';
import EmploymentPage from './EmploymentPage';
import ErrorPage from './ErrorPage';
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
                <Route path="/coding/employment">
                    <EmploymentPage />
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
                    <MartialArtsPage martialArtsStyle={MartialArtsStyleType.ITF_TKD} />
                </Route>
                <Route path="/martialArts/wtTaekwondo">
                    <MartialArtsPage martialArtsStyle={MartialArtsStyleType.WT_TKD} />
                </Route>
                <Route path="/martialArts/haidongGumdo">
                    <MartialArtsPage martialArtsStyle={MartialArtsStyleType.HDGD} />
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
