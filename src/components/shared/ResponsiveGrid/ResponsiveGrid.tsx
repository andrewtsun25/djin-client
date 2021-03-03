import { GridList, GridListTile, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import Embed from 'react-embed';

import responsiveGridStyles from './ResponsiveGrid.styles';

const COL_HEIGHT = 333;

interface ResponsiveGridProps<T> {
    title?: string;
    items: T[];
    className?: string;
    renderGridTile(item: T, index?: number): JSX.Element;
    embedUrl?: string;
}

function ResponsiveGrid<T>({
    title,
    items,
    renderGridTile,
    className,
    embedUrl,
}: ResponsiveGridProps<T>): ReactElement<ResponsiveGridProps<T>> {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const classes = responsiveGridStyles();
    const cols = isMedium ? 4 : isSmall ? 2 : 1;
    const titleVariant = isMedium ? 'h4' : isSmall ? 'h5' : 'h6';
    return (
        <div className={clsx(classes.root, className)}>
            <GridList cellHeight={COL_HEIGHT} cols={cols} spacing={10}>
                {title && (
                    <GridListTile cols={cols} style={{ height: 'auto' }}>
                        <Typography paragraph variant={titleVariant} align="center" className={classes.gridHeader}>
                            {title}
                        </Typography>
                    </GridListTile>
                )}
                {embedUrl && (
                    <GridListTile cols={cols} style={{ height: 'auto' }}>
                        <Embed url={embedUrl} />
                    </GridListTile>
                )}
                {items.map((item: T, index: number) => renderGridTile(item, index))}
            </GridList>
        </div>
    );
}

export default ResponsiveGrid;
