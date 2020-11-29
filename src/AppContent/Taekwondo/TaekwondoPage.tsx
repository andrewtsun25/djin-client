import React from 'react';
import useTaekwondoPageInfo from "hooks/useTkdInfo";
import { TkdStyle } from "types/Taekwondo";

interface TaekwondoPageProps {
    tkdStyle: TkdStyle;
}

const TaekwondoPage: React.FC<TaekwondoPageProps> = ({ tkdStyle }: TaekwondoPageProps) => {
    const pageInfo = useTaekwondoPageInfo(tkdStyle);
    return pageInfo ? (
        <>
            <div>
                <div>
                    <img src={pageInfo.logoUrl} alt={`${pageInfo.style}_logo`} />
                    <h1>{pageInfo.style}</h1>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <i>{pageInfo.introduction}</i>
                    <p>{pageInfo.biography}</p>
                </div>
                <img src={pageInfo.imgUrl} alt={`${pageInfo.style}_img`} />
            </div>
            <hr />
            <div>
                <h1>Studios</h1>
                {pageInfo.studios.map(studio => (
                    <p>{JSON.stringify(studio)}</p>
                ))}
            </div>
        </>
    ) : null;
}

export default TaekwondoPage;
