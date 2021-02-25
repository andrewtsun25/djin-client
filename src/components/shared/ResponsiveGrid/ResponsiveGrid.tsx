import { GridList, GridListTile, Link, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { ReactElement } from 'react';

import responsiveGridStyles from './ResponsiveGrid.styles';
import { ResponsiveGridItemProps } from './ResponsiveGridItem/ResponsiveGridItem';

const COL_HEIGHT = 333;

interface ResponsiveGridProps<T> {
    title?: string;
    titleHref?: string;
    items: T[];
    renderGridTile(item: T): React.ComponentType<ResponsiveGridItemProps>;
}

function ResponsiveGrid<T>({
    title,
    titleHref,
    items,
    renderGridTile,
}: ResponsiveGridProps<T>): ReactElement<ResponsiveGridProps<T>> {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.up('md'));
    const classes = responsiveGridStyles();
    const cols = isMedium ? 4 : isSmall ? 2 : 1;
    return (
        <div className={classes.root}>
            <GridList cellHeight={COL_HEIGHT} cols={cols}>
                {title && (
                    <GridListTile key="Subheader" cols={cols} style={{ height: 'auto' }}>
                        <Link href={titleHref} target="_blank" rel="noopener noreferrer">
                            <Typography paragraph variant="h5" className={classes.gridHeader}>
                                {title}
                            </Typography>
                        </Link>
                    </GridListTile>
                )}
                {items.map((item: T) => renderGridTile(item))}
            </GridList>
        </div>
    );
}

export default ResponsiveGrid;
