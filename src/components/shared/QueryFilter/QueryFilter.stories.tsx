import { Meta, Story } from '@storybook/react';
import React from 'react';
import { QueryFilterDemoData } from 'types/storybook';

import type { QueryFilterDemoProps } from './demo';
import { QueryFilterDemo } from './demo';

const Template: Story<QueryFilterDemoProps> = (args: QueryFilterDemoProps) => <QueryFilterDemo {...args} />;

export default {
    title: 'Shared/Query Filter',
    component: QueryFilterDemo,
    argTypes: {
        data: { control: 'array' },
    },
} as Meta<QueryFilterDemoProps>;

export const DefaultView = Template.bind({});
const defaultData: QueryFilterDemoData[] = [
    {
        name: 'William',
        height: 160,
        birthday: new Date('1993-02-01'),
    },
    {
        name: 'Robert',
        height: 170,
        birthday: new Date('1996-04-20'),
    },
    {
        name: 'Joseph',
        height: 180,
        birthday: new Date('1990-07-06'),
    },
];
DefaultView.args = {
    data: defaultData,
};
