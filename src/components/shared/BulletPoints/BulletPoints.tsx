import { Typography } from '@material-ui/core';
import React, { CSSProperties } from 'react';
import { Nilable } from 'types/alias';
import { isNotNil } from 'utils/general';

interface BulletPointsProps {
    points: Nilable<string[]>;
    className?: string;
    style?: CSSProperties;
}

const BULLET_POINT_ROLE = 'bulletPoint';

const BulletPoints: React.FC<BulletPointsProps> = ({ points, className, style }: BulletPointsProps) => {
    return isNotNil(points) && points.length > 0 ? (
        <ul className={className} style={style}>
            {points.map((point, index) => (
                <li key={index} role={BULLET_POINT_ROLE}>
                    <Typography>{point}</Typography>
                </li>
            ))}
        </ul>
    ) : null;
};

export { BULLET_POINT_ROLE, BulletPoints };
export type { BulletPointsProps };
