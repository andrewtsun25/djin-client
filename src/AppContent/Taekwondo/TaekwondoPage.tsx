import React from 'react';
import useTaekwondoInfo from "hooks/useTkdInfo";
import {TkdStyle} from "types/Taekwondo";

interface TaekwondoPageProps {
    tkdStyle: TkdStyle;
}

const TaekwondoPage: React.FC<TaekwondoPageProps> = ({ tkdStyle }: TaekwondoPageProps) => {
    const [tkdInfo] = useTaekwondoInfo(tkdStyle);
    return tkdInfo && (
        <>
            <div>
                <div>
                    <img src={tkdInfo.logoUrl} alt={`${tkdInfo.style}_logo`} />
                    <h1>{tkdInfo.style}</h1>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <i>{tkdInfo.introduction}</i>
                    <p>{tkdInfo.biography}</p>
                </div>
                <img src={tkdInfo.imgUrl} alt={`${tkdInfo.style}_img`} />
            </div>
            <hr />
            <div>
                <h1>Studios</h1>
                {tkdInfo.studios.map(studio => (
                    <p>{JSON.stringify(studio)}</p>
                ))}
            </div>
        </>
    );
}

export default TaekwondoPage;
