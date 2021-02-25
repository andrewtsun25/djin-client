import { CircularProgress, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import Error from '@material-ui/icons/Error';
import React from 'react';

import responsiveGridItemStyles from './ResponsiveGridItem.styles';

interface ResponsiveGridItemProps {
    downloadUrl: string;
    mediaUrl: string;
    title: string;
    subtitle?: string;
    icon: JSX.Element;
    loading?: boolean;
    error?: Error;
}

const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
    mediaUrl,
    title,
    subtitle,
    downloadUrl,
    icon,
    loading,
    error,
}: ResponsiveGridItemProps) => {
    const classes = responsiveGridItemStyles();
    return (
        <GridListTile cols={1} rows={1} className={classes.tile}>
            {!loading && !error && <img src={mediaUrl} alt={`${title} Background`} className={classes.media} />}
            {loading && <CircularProgress />}
            {error && <Error />}
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
