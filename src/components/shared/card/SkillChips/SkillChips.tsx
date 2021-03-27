import { Chip } from '@material-ui/core';
import React from 'react';
import { Nilable } from 'types/alias';
import { isNotNil } from 'utils/general';

import skillChipsStyles from './SkillChips.styles';

interface SkillChipsProps {
    skills: Nilable<string[]>;
}

const SKILL_CHIP_ROLE = 'skill';

const SkillChips: React.FC<SkillChipsProps> = ({ skills }: SkillChipsProps) => {
    const classes = skillChipsStyles();
    return isNotNil(skills) && skills.length > 0 ? (
        <div className={classes.skillChipContainer}>
            {skills.map((skill) => (
                <Chip label={skill} size="small" className={classes.skillChip} key={skill} role={SKILL_CHIP_ROLE} />
            ))}
        </div>
    ) : null;
};

export { SKILL_CHIP_ROLE, SkillChips };
export type { SkillChipsProps };
