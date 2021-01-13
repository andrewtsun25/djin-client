export interface TkdPageData {
    style: TkdStyle;
    styleName: string;
    logoUrl: string;
    blackBeltRank: number;
    introduction: string;
    biography: string;
    imgUrl: string;
    imgCaption: string;
    studios: TkdStudio[];
}

export interface TkdStudio {
    name: string;
    logoUrl: string;
    href: string;
}

export enum TkdStyle {
    ITF = "ITF",
    WT = "WT"
}
