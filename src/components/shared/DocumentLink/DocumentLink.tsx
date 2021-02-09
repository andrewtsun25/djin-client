import { Link, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import React from 'react';

import documentLinkStyles from './DocumentLink.styles';

interface DocumentLinkProps {
    href: string;
    text: string;
}

const DocumentLink: React.FC<DocumentLinkProps> = ({ href, text }: DocumentLinkProps) => {
    const classes = documentLinkStyles();
    return (
        <Typography paragraph>
            <Link href={href} className={classes.paperLink} target="_blank" rel="noopener noreferrer">
                <DescriptionIcon className={classes.paperLinkIcon} />
                {text}
            </Link>
        </Typography>
    );
};

export default DocumentLink;
