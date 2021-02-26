import { GridList, GridListTile, Link, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

import responsiveGridStyles from './ResponsiveGrid.styles';

const COL_HEIGHT = 333;

interface ResponsiveGridProps<T> {
    title?: string;
    titleHref?: string;
    items: T[];
    className?: string;
    renderGridTile(item: T, index?: number): JSX.Element;
}

function ResponsiveGrid<T>({
    title,
    titleHref,
    items,
    renderGridTile,
    className,
}: ResponsiveGridProps<T>): ReactElement<ResponsiveGridProps<T>> {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const classes = responsiveGridStyles();
    const cols = isMedium ? 4 : isSmall ? 2 : 1;
    return (
        <div className={clsx(classes.root, className)}>
            <GridList cellHeight={COL_HEIGHT} cols={cols} spacing={10}>
                {title && (
                    <GridListTile cols={cols} style={{ height: 'auto' }}>
                        <Link href={titleHref} target="_blank" rel="noopener noreferrer">
                            <Typography paragraph variant="h4" align="center" className={classes.gridHeader}>
                                {title}
                            </Typography>
                        </Link>
                    </GridListTile>
                )}
                {items.map((item: T, index: number) => renderGridTile(item, index))}
            </GridList>
        </div>
    );
}

export default ResponsiveGrid;
