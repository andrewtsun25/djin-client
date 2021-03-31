import { Home } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IconLinkProps } from './IconLink';
import { IconLink } from './IconLink';

const Template: Story<IconLinkProps> = (args: IconLinkProps) => <IconLink {...args} />;

export default {
    title: 'Shared/Icon Link',
    component: IconLink,
    argTypes: {
        icon: { control: 'object' },
        href: { control: 'text' },
        text: { control: 'text' },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
    },
} as Meta<IconLinkProps>;

export const DefaultView = Template.bind({});
DefaultView.args = {
    icon: <Home />,
    href: 'https://www.djin.dev',
    text: 'djin.dev Homepage',
};
