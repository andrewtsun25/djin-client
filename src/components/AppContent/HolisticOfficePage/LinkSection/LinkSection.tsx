import { Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import IconLink from 'components/shared/IconLink';
import { useHolisticOfficeLinks } from 'hooks/useHolisticOfficeLinks';
import React from 'react';
import { HolisticOfficeLink, HolisticOfficeLinkType } from 'types/holisticOffice';

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
    const links = useHolisticOfficeLinks(linkType);
    return (
        <div className={classes.linkSection}>
            <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.title}>
                {title}
            </Typography>
            <Typography paragraph>{description}</Typography>
            <Typography>
                <ul className={classes.linkList}>
                    {links.map(({ name, href }: HolisticOfficeLink) => (
                        <IconLink href={href} text={name} icon={icon} key={name} className={classes.link} />
                    ))}
                </ul>
            </Typography>
        </div>
    );
};

export default LinkSection;
