import { Paper, Typography } from '@material-ui/core';
import { map } from 'lodash';
import React from 'react';
import { ArchitectureCategory } from 'types/holisticOffice';

import architecturePaperStyles from './ArchitecturePaper.styles';

interface ArchitecturePaperProps {
    category: ArchitectureCategory;
}

const ArchitecturePaper: React.FC<ArchitecturePaperProps> = ({
    category: { title, mappings },
}: ArchitecturePaperProps) => {
    const classes = architecturePaperStyles();
    return (
        <Paper className={classes.architecturePaper} elevation={5}>
            <Typography variant="h5" align="center">
                {title}
            </Typography>
            <Typography>
                <ul>
                    {map(mappings, (value: string, key: string) => (
                        <li key={key}>
                            <b>{key}:</b> {value}
                        </li>
                    ))}
                </ul>
            </Typography>
        </Paper>
    );
};

export default ArchitecturePaper;
