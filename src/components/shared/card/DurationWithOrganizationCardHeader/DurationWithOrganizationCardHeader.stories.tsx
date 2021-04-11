import { Card, CardContent, Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import { DateTime } from 'luxon';
import React from 'react';

import {
    DurationWithOrganizationCardHeader,
    DurationWithOrganizationCardHeaderProps,
} from './DurationWithOrganizationCardHeader';

const Template: Story<DurationWithOrganizationCardHeaderProps> = (args: DurationWithOrganizationCardHeaderProps) => (
    <DurationWithOrganizationCardHeader {...args} />
);

export default {
    title: 'Shared/Card/Duration With Organization Card Header',
    component: DurationWithOrganizationCardHeader,
    argTypes: {
        startDate: { control: 'date' },
        endDate: { control: 'date' },
    },
    decorators: [
        (StoryComponent): JSX.Element => (
            <Card>
                <StoryComponent />
                <CardContent>
                    <Typography paragraph>The header of this component contains an organization.</Typography>
                </CardContent>
            </Card>
        ),
    ],
} as Meta<DurationWithOrganizationCardHeaderProps>;

const defaultArgs: Partial<DurationWithOrganizationCardHeaderProps> = {
    title: 'Card Header',
    subtitle: 'Duration With Organization',
    startDate: DateTime.now().minus({ months: 2 }).toJSDate(),
    logoUrl: 'https://storage.googleapis.com/djin-dev.appspot.com/projects/logo/djin_logo.png',
};

export const WithoutEndDate = Template.bind({});
WithoutEndDate.args = defaultArgs;

export const WithEndDate = Template.bind({});
WithEndDate.args = {
    ...defaultArgs,
    endDate: DateTime.now().minus({ months: 1 }).toJSDate(),
};
