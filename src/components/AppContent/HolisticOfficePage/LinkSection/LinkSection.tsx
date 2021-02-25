import { Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import HolisticOfficeAPI from 'api/HolisticOfficeAPI';
import ErrorView from 'components/shared/ErrorView';
import IconLink from 'components/shared/IconLink';
import LoadingView from 'components/shared/LoadingView';
import React from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
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
    const [links, loading, error] = useCollectionDataOnce<HolisticOfficeLink>(HolisticOfficeAPI.getLinks(linkType));
    return (
        <div className={classes.linkSection}>
            <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.title}>
                {title}
            </Typography>
            {error && <ErrorView error={error} message={`An error occurred when loading ${linkType} links`} />}
            {loading && <LoadingView message={`Loading ${linkType} links`} />}
            {links && (
                <>
                    <Typography paragraph>{description}</Typography>
                    <ul className={classes.linkList}>
                        {links.map(({ name, url }: HolisticOfficeLink) => (
                            <IconLink href={url} text={name} icon={icon} key={name} className={classes.link} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default LinkSection;
