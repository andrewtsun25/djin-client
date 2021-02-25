import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import React from 'react';

import responsiveGridItemStyles from './ResponsiveGridItem.styles';

interface ResponsiveGridItemProps {
    downloadUrl: string;
    mediaUrl: string;
    title: string;
    subtitle?: string;
    icon: JSX.Element;
}

const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
    mediaUrl,
    title,
    subtitle,
    downloadUrl,
    icon,
}: ResponsiveGridItemProps) => {
    const classes = responsiveGridItemStyles();
    return (
        <GridListTile cols={1} rows={1}>
            <div
                className={classes.media}
                style={{
                    backgroundImage: `url(${mediaUrl})`,
                }}
            />
            <GridListTileBar
                title={title}
                subtitle={subtitle}
                actionIcon={
                    <IconButton
                        aria-label={`Download ${title}`}
                        className={classes.icon}
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {icon}
                    </IconButton>
                }
            />
        </GridListTile>
    );
};

export type { ResponsiveGridItemProps };
export default ResponsiveGridItem;
