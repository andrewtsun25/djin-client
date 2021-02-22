import { Grow, Paper, Typography } from '@material-ui/core';
import { map } from 'lodash';
import React from 'react';
import { HolisticOfficeModule } from 'types/holisticOffice';

import architecturePaperStyles from './ArchitecturePaper.styles';

interface ArchitecturePaperProps {
    category: HolisticOfficeModule;
}

const ArchitecturePaper: React.FC<ArchitecturePaperProps> = ({
    category: { name, components },
}: ArchitecturePaperProps) => {
    const classes = architecturePaperStyles();
    return (
        <Grow in>
            <Paper className={classes.architecturePaper} elevation={5}>
                <Typography variant="h5" align="center">
                    {name}
                </Typography>
                <Typography>
                    <ul>
                        {map(components, (value: string, key: string) => (
                            <li key={key}>
                                <b>{key}:</b> {value}
                            </li>
                        ))}
                    </ul>
                </Typography>
            </Paper>
        </Grow>
    );
};

export default ArchitecturePaper;
