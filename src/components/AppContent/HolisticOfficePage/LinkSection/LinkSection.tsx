import { Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { HolisticOfficeLinkType } from 'types/holisticOffice';

import LinkList from './LinkList';
import linkSectionStyles from './LinkSection.styles';

interface LinkSectionProps {
    title: string;
    description: string;
    linkType: HolisticOfficeLinkType;
    icon: JSX.Element;
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, description, linkType, icon }: LinkSectionProps) => {
    const classes = linkSectionStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <section className={classes.linkSection}>
            <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.title}>
                {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
            <LinkList linkType={linkType} icon={icon} />
        </section>
    );
};

export default LinkSection;
