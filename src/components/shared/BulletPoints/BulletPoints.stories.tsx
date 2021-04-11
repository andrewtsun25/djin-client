import { Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { BulletPointsProps } from './BulletPoints';
import { BulletPoints } from './BulletPoints';

const Template: Story<BulletPointsProps> = (args: BulletPointsProps) => <BulletPoints {...args} />;

export default {
    title: 'Shared/Bullet Points',
    component: BulletPoints,
    argTypes: {
        points: { control: 'array' },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
    },
    decorators: [
        (StoryComponent): JSX.Element => (
            <div>
                <Typography paragraph>If there exists at least one bullet point, it will be shown below: </Typography>
                <StoryComponent />
            </div>
        ),
    ],
} as Meta<BulletPointsProps>;

export const WithBulletPoints = Template.bind({});
WithBulletPoints.args = {
    points: ['Point 1', 'Point 2', 'Point 3'],
};

export const WithoutBulletPoints = Template.bind({});
WithoutBulletPoints.args = {
    points: [],
};
