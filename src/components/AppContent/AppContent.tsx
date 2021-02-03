import React from 'react';
import clsx from 'clsx';
import appContentStyles from './AppContent.styles';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import { CodingProjects, CodingResearch } from './Coding';
import MusicScoresPage from './MusicScoresPage';
import { About } from './About';
import ErrorPage from './ErrorPage';
import MartialArtsPage from './MartialArtsPage';
import { MartialArtsStyle } from 'types/martialArts';
import EducationPage from './EducationPage';
import { EduType } from 'types/education';
import ExperiencePage from './ExperiencePage';

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
                    <CodingProjects />
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
