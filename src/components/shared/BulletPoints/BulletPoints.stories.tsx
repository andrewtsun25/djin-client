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
    },
} as Meta;

export const DefaultView = Template.bind({});
DefaultView.args = {
    points: ['Point 1', 'Point 2', 'Point 3'],
};
