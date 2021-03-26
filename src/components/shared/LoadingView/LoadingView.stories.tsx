import { Meta, Story } from '@storybook/react';
import React from 'react';

import LoadingView, { LoadingViewProps } from './LoadingView';

const Template: Story<LoadingViewProps> = (args: LoadingViewProps) => <LoadingView {...args} />;

const DefaultView = Template.bind({});
DefaultView.args = {
    message: 'Loading content...',
    className: undefined,
};

export default {
    title: 'Shared/Loading View',
    component: LoadingView,
    argTypes: {
        message: { control: 'text' },
        className: { control: 'text' },
    },
} as Meta;
