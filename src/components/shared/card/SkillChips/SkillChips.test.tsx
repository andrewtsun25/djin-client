import { render } from '@testing-library/react';
import React from 'react';

import { SkillChips } from './SkillChips';

describe('SkillChips', () => {
    const skillRole = 'skill';
    const zeroLength = 0;

    it('renders an array of skills', () => {
        const inputSkills = ['skill1', 'skill2', 'skill3'];
        const { getAllByRole } = render(<SkillChips skills={inputSkills} />);
        const actualSkills = getAllByRole(skillRole).map((item) => item.textContent);
        expect(actualSkills).toEqual(inputSkills);
    });

    it('renders nothing if an empty array of skills was passed in', () => {
        const { queryAllByRole } = render(<SkillChips skills={[]} />);
        const actualSkillChips = queryAllByRole(skillRole);
        expect(actualSkillChips).toHaveLength(zeroLength);
    });

    it('renders nothing if a null array of skills was passed in', () => {
        const { queryAllByRole } = render(<SkillChips skills={null} />);
        const actualSkillChips = queryAllByRole(skillRole);
        expect(actualSkillChips).toHaveLength(zeroLength);
    });

    it('renders nothing if an undefined array of skills was passed in', () => {
        const { queryAllByRole } = render(<SkillChips skills={undefined} />);
        const actualSkillChips = queryAllByRole(skillRole);
        expect(actualSkillChips).toHaveLength(zeroLength);
    });
});
