import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { SkillChipsProps } from './SkillChips';
import { SkillChips } from './SkillChips';

const Template: Story<SkillChipsProps> = (args: SkillChipsProps) => <SkillChips {...args} />;

export default {
    title: 'Shared/Skill Chips',
    component: SkillChips,
    argTypes: {
        skills: { control: 'array' },
    },
    decorators: [
        (StoryComponent): JSX.Element => (
            <Card>
                <CardHeader title="Sample Card" subheader="Skill Chips" />
                <CardContent>
                    <Typography paragraph>
                        Proin condimentum, risus ut mollis volutpat, lacus enim pulvinar felis, pretium rutrum nisl
                        felis a est. Curabitur euismod eros ut nisi suscipit euismod. Pellentesque varius arcu vel enim
                        posuere ornare. Mauris vel condimentum massa. Phasellus in tincidunt quam, nec vulputate enim.
                        In vitae accumsan velit. In commodo lorem sed malesuada sodales. Maecenas vitae condimentum est.
                        Aliquam viverra, mi id malesuada fringilla, libero mi semper diam, aliquet pulvinar nibh sem
                        eget magna. Pellentesque vel diam congue, commodo tellus eget, vestibulum elit. Sed hendrerit
                        luctus mauris. Vestibulum ornare aliquam lectus, ut varius diam fringilla vitae.
                    </Typography>
                </CardContent>
                <StoryComponent />
            </Card>
        ),
    ],
} as Meta<SkillChipsProps>;

export const WithSkills = Template.bind({});
WithSkills.args = {
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
};

export const WithEmptySkills = Template.bind({});
WithEmptySkills.args = {
    skills: [],
};

export const WithNullSkills = Template.bind({});
WithNullSkills.args = {
    skills: null,
};
