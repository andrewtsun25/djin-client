import { Grow, Paper, Typography } from '@material-ui/core';
import { map } from 'lodash';
import React from 'react';
import { HolisticOfficeModule } from 'types/holisticOffice';

import moduleInfoStyles from './ModuleInfo.styles';

interface ModuleInfoProps {
    category: HolisticOfficeModule;
}

const ModuleInfo: React.FC<ModuleInfoProps> = ({ category: { name, components } }: ModuleInfoProps) => {
    const classes = moduleInfoStyles();
    return (
        <Grow in>
            <Paper className={classes.architecturePaper} elevation={5}>
                <Typography variant="h5" align="center">
                    {name}
                </Typography>
                <ul>
                    {map(components, (value: string, key: string) => (
                        <li key={key}>
                            <Typography>
                                <b>{key}:</b> {value}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Paper>
        </Grow>
    );
};

export default ModuleInfo;
