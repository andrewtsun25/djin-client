import { Typography } from '@material-ui/core';
import React from 'react';
import { Nilable } from 'types/alias';
import { isNotNil } from 'utils/general';

interface CardInfoProps {
    points: Nilable<string[]>;
}

const BulletPoints: React.FC<CardInfoProps> = ({ points }: CardInfoProps) => {
    return isNotNil(points) && points.length > 0 ? (
        <ul>
            {points.map((point, index) => (
                <li key={index}>
                    <Typography>{point}</Typography>
                </li>
            ))}
        </ul>
    ) : null;
};

export default BulletPoints;
