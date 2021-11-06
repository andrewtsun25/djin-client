import { CircularProgress, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Error from '@material-ui/icons/Error';
import clsx from 'clsx';
import { isNil } from 'lodash';
import React from 'react';
import { Nilable } from 'types/alias';

import responsiveGridItemStyles from './ResponsiveGridItem.styles';

const ITEM_MARGIN = 5;

interface ResponsiveGridItemProps {
    downloadUrl: Nilable<string>;
    mediaUrl: Nilable<string>;
    title: string;
    subtitle?: string;
    icon: JSX.Element;
    loading?: boolean;
    error: Nilable<Error>;
    mediaSizingStrategy?: string;
}

const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
    mediaUrl,
    title,
    subtitle,
    downloadUrl,
    icon,
    loading,
    error,
    mediaSizingStrategy,
}: ResponsiveGridItemProps) => {
    const classes = responsiveGridItemStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const cols = isMedium ? 4 : isSmall ? 2 : 1;
    const width = `calc((100% - 2 * ${ITEM_MARGIN}px * ${cols})/${cols})`;
    return (
        <GridListTile cols={1} rows={1} style={{ width: width, margin: ITEM_MARGIN }}>
            {!loading && isNil(error) && mediaUrl && (
                <div
                    className={classes.media}
                    style={{ backgroundImage: `url(${mediaUrl})`, backgroundSize: mediaSizingStrategy || 'cover' }}
                />
            )}
            {loading && isNil(error) && (
                <div className={classes.loadingContainer}>
                    <CircularProgress size={100} className={classes.absoluteCenter} />
                </div>
            )}
            {(error || (!loading && !mediaUrl)) && (
                <div className={classes.errorContainer}>
                    <Error
                        color="error"
                        fontSize="inherit"
                        className={clsx(classes.absoluteCenter, classes.errorIcon)}
                    />
                </div>
            )}
            <GridListTileBar
                title={title}
                subtitle={subtitle}
                actionIcon={
                    downloadUrl ? (
                        <IconButton
                            aria-label={`Download ${title}`}
                            className={classes.icon}
                            href={downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </IconButton>
                    ) : (
                        icon
                    )
                }
            />
        </GridListTile>
    );
};

export type { ResponsiveGridItemProps };
export default ResponsiveGridItem;
