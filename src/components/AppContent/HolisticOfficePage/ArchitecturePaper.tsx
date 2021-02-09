import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { ArchitectureCategory, ArchitectureCategoryKVPair } from 'types/holisticOffice';

import holisticOfficeArchitecturePaperStyles from './HolisticOfficeArchitecturePaper.styles';

interface ArchitecturePaperProps {
    category: ArchitectureCategory;
}

const ArchitecturePaper: React.FC<ArchitecturePaperProps> = ({
    category: { title, mappings },
}: ArchitecturePaperProps) => {
    const classes = holisticOfficeArchitecturePaperStyles();
    return (
        <Paper className={classes.architecturePaper} elevation={5}>
            <Typography variant="h5" align="center">
                {title}
            </Typography>
            <Typography>
                <ul>
                    {mappings.map(({ key, value }: ArchitectureCategoryKVPair) => (
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
