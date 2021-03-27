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
                        Skill chips will be displayed below if there is at least one skill to display.
                    </Typography>
                    <StoryComponent />
                </CardContent>
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
