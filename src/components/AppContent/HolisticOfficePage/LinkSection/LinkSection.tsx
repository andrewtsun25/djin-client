import { Typography, useMediaQuery } from '@material-ui/core';
import IconLink from 'components/shared/IconLink';
import { map } from 'lodash';
import React from 'react';

import theme from '../../../theme';
import linkSectionStyles from './LinkSection.styles';

interface LinkSectionProps {
    title: string;
    description: string;
    links: Record<string, string>;
    icon: JSX.Element;
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, description, links, icon }: LinkSectionProps) => {
    const classes = linkSectionStyles();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.title}>
                {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
            <Typography>
                <ul className={classes.linkList}>
                    {map(links, (value, key) => (
                        <IconLink href={value} text={key} icon={icon} className={classes.link} />
                    ))}
                </ul>
            </Typography>
        </>
    );
};

export default LinkSection;
