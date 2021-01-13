import React from 'react';
import clsx from 'clsx';
import appContentStyles from './AppContent.styles';
import {
    Switch,
    Route
} from 'react-router-dom';
import HomePage from './HomePage';
import { CodingEducation, CodingExperience, CodingProjects, CodingResearch } from './Coding';
import { MusicEducation, MusicScores } from './Music';
import { About } from "./About";
import ErrorPage from "./ErrorPage";
import TaekwondoPage from "./Taekwondo/TaekwondoPage";
import { TkdStyle } from "../types/Taekwondo";

interface AppContentProps {
    isAppDrawerOpen: boolean;
}

const AppContent: React.FC<AppContentProps> = ({ isAppDrawerOpen }: AppContentProps) => {
    const classes = appContentStyles();
    return (
        <main
            className={clsx(classes.root, isAppDrawerOpen && classes.shift)}
        >
            <div className={classes.drawerHeader} />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/coding/experience">
                    <CodingExperience />
                </Route>
                <Route path="/coding/education">
                    <CodingEducation />
                </Route>
                <Route path="/coding/projects">
                    <CodingProjects />
                </Route>
                <Route path="/coding/research">
                    <CodingResearch />
                </Route>
                <Route path="/music/education">
                    <MusicEducation />
                </Route>
                <Route path="/music/scores">
                    <MusicScores />
                </Route>
                <Route path="/taekwondo/itf">
                    <TaekwondoPage tkdStyle={TkdStyle.ITF}/>
                </Route>
                <Route path="/taekwondo/wt">
                    <TaekwondoPage tkdStyle={TkdStyle.WT}/>
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
}

export default AppContent;
