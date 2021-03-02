import { useHolisticOfficeLinks } from 'api/holisticOffice';
import ErrorView from 'components/shared/ErrorView';
import IconLink from 'components/shared/IconLink';
import LoadingView from 'components/shared/LoadingView';
import { isNil } from 'lodash';
import React from 'react';
import { HolisticOfficeLink, HolisticOfficeLinkType } from 'types/holisticOffice';
import { isNotNil } from 'utils/general';

import linkListStyles from './LinkList.styles';

interface LinkSectionContentProps {
    linkType: HolisticOfficeLinkType;
    icon: JSX.Element;
}

const LinkList: React.FC<LinkSectionContentProps> = ({ linkType, icon }: LinkSectionContentProps) => {
    const classes = linkListStyles();
    const { links, error } = useHolisticOfficeLinks(linkType);

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message={`${linkType} links unavailable.`} />;
    }

    // Loading state
    if (isNil(links)) {
        return <LoadingView message={`Loading ${linkType} links...`} />;
    }

    // Success state
    return (
        <ul className={classes.linkList}>
            {links.map(({ name, url }: HolisticOfficeLink) => (
                <IconLink href={url} text={name} icon={icon} key={name} className={classes.link} />
            ))}
        </ul>
    );
};

export default LinkList;
