import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { LoadingViewProps } from './LoadingView';
import { LoadingView } from './LoadingView';

const Template: Story<LoadingViewProps> = (args: LoadingViewProps) => <LoadingView {...args} />;

export default {
    title: 'Shared/Loading View',
    component: LoadingView,
    argTypes: {
        message: { control: 'text' },
    },
} as Meta<LoadingViewProps>;

export const DefaultView = Template.bind({});
DefaultView.args = {
    message: 'Loading content...',
};
