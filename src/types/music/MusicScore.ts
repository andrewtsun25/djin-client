export interface MusicScore {
    date: Date;
    name: string;
    sections: Record<string, string>;
    trackUrl: string;
}
