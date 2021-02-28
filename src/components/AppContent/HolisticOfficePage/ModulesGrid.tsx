import { Grid } from '@material-ui/core';
import { useHolisticOfficeModules } from 'api/holisticOffice';
import ErrorView from 'components/shared/ErrorView';
import LoadingView from 'components/shared/LoadingView';
import { isNil } from 'lodash';
import React from 'react';
import { isNotNil } from 'utils/general';

import ModuleInfo from './ModuleInfo';

const ModulesGrid: React.FC = () => {
    const { modules, error } = useHolisticOfficeModules();

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message="Architectural modules unavailable." />;
    }

    // Loading state
    if (isNil(modules)) {
        return <LoadingView message="Loading architectural modules..." />;
    }

    // Success state
    return (
        <Grid container spacing={3}>
            {modules.map((module) => (
                <Grid item xs={12} sm={6} md={4} key={module.name}>
                    <ModuleInfo category={module} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ModulesGrid;
