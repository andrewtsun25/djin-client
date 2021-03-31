import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { ErrorViewProps } from './ErrorView';
import { ErrorView } from './ErrorView';

const Template: Story<ErrorViewProps> = (args: ErrorViewProps) => <ErrorView {...args} />;

export default {
    title: 'Shared/Error View',
    component: ErrorView,
    argTypes: {
        error: { control: 'object' },
        message: { control: 'text' },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
    },
} as Meta<ErrorViewProps>;

export const DefaultView = Template.bind({});
DefaultView.args = {
    error: new Error('Storybook Mock Error'),
    message: 'An error occurred.',
};
