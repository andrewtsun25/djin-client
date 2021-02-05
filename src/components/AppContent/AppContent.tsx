import clsx from 'clsx';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EduType } from 'types/education';
import { MartialArtsStyle } from 'types/martialArts';

import { About } from './About';
import appContentStyles from './AppContent.styles';
import { CodingResearch } from './Coding';
import EducationPage from './EducationPage';
import ErrorPage from './ErrorPage';
import ExperiencePage from './ExperiencePage';
import HomePage from './HomePage';
import MartialArtsPage from './MartialArtsPage';
import MusicScoresPage from './MusicScoresPage';
import ProjectsPage from './ProjectsPage';

interface AppContentProps {
    isAppDrawerOpen: boolean;
}

const AppContent: React.FC<AppContentProps> = ({ isAppDrawerOpen }: AppContentProps) => {
    const classes = appContentStyles();
    return (
        <main className={clsx(classes.root, isAppDrawerOpen && classes.shift)}>
            <div className={classes.drawerHeader} />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/coding/experience">
                    <ExperiencePage />
                </Route>
                <Route path="/coding/education">
                    <EducationPage eduType={EduType.CODING} />
                </Route>
                <Route path="/coding/projects">
                    <ProjectsPage />
                </Route>
                <Route path="/coding/research">
                    <CodingResearch />
                </Route>
                <Route path="/music/education">
                    <EducationPage eduType={EduType.MUSIC} />
                </Route>
                <Route path="/music/scores">
                    <MusicScoresPage />
                </Route>
                <Route path="/martialArts/itf">
                    <MartialArtsPage martialArtsStyle={MartialArtsStyle.ITF} />
                </Route>
                <Route path="/martialArts/wt">
                    <MartialArtsPage martialArtsStyle={MartialArtsStyle.WT} />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </main>
    );
};

export default AppContent;
