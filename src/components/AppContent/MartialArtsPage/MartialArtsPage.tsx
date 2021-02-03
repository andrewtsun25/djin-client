import React from 'react';
import useMartialArts from "hooks/useMartialArts";
import { MartialArtsStyle } from "types/martialArts";
import martialArtsPageStyles from "./MartialArtsPage.styles";

interface MartialArtsPageProps {
    martialArtsStyle: MartialArtsStyle;
}

const MartialArtsPage: React.FC<MartialArtsPageProps> = ({ martialArtsStyle }: MartialArtsPageProps) => {
    const classes = martialArtsPageStyles();
    const pageInfo = useMartialArts(martialArtsStyle);
    return pageInfo ? (
        <>
            <div className={classes.pageHeading}>
                <img src={pageInfo.logoUrl} alt={`${pageInfo.style}_logo`} />
                <h1>{pageInfo.styleName}</h1>
            </div>
            <hr />
            <div className={classes.pageContent}>
                <article className={classes.info}>
                    <i>{pageInfo.introduction}</i>
                    <p>{pageInfo.biography}</p>
                </article>
                <figure className={classes.pic}>
                    <img className={classes.picImg} src={pageInfo.imgUrl} alt={`${pageInfo.style}_img`} />
                    <figcaption className={classes.picCaption}>{pageInfo.imgCaption}</figcaption>
                </figure>
            </div>
            <hr />
            <div>
                <h1>Studios</h1>
                <div className={classes.dojangGrid}>
                {pageInfo.studios.map(studio => (
                    <a href={studio.href} key={studio.name}>
                        <figure className={classes.pic}>
                            <img src={studio.logoUrl} alt={studio.name} className={classes.picImg}/>
                            <figcaption className={classes.picCaption}>{studio.name}</figcaption>
                        </figure>
                    </a>
                ))}
                </div>
            </div>
        </>
    ) : null;
}

export default MartialArtsPage;
