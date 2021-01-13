import React from 'react';
import useTaekwondoPageInfo from "hooks/useTkdInfo";
import { TkdStyle } from "types/Taekwondo";
import taekwondoPageStyles from "./TaekwondoPage.styles";

interface TaekwondoPageProps {
    tkdStyle: TkdStyle;
}

const TaekwondoPage: React.FC<TaekwondoPageProps> = ({ tkdStyle }: TaekwondoPageProps) => {
    const classes = taekwondoPageStyles();
    const pageInfo = useTaekwondoPageInfo(tkdStyle);
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
                    <figure className={classes.pic}>
                        <img src={studio.logoUrl} alt={studio.name} className={classes.picImg}/>
                        <figcaption className={classes.picCaption}>{studio.name}</figcaption>
                    </figure>
                ))}
                </div>
            </div>
        </>
    ) : null;
}

export default TaekwondoPage;
