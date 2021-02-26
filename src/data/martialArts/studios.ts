import { MartialArtsStudio, StudioIds } from 'types/martialArts';

const UcsdTkd: MartialArtsStudio = {
    id: StudioIds.UCSD_TKD,
    name: 'UCSD Taekwondo',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/ucsd_tkd.png',
    studioUrl: 'https://www.facebook.com/groups/ucsdtkd/',
    city: 'San Diego, CA, USA',
};

const YonseiTkd: MartialArtsStudio = {
    id: StudioIds.YONSEI_TKD,
    name: "Yonsei Int'l Taekwondo Academy",
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/yonsei_intl_tkd.png',
    studioUrl: 'http://web.yonsei.ac.kr/yitaekwondo/',
    city: 'Seoul, South Korea',
};

const UclaTkd: MartialArtsStudio = {
    id: StudioIds.UCLA_TKD,
    name: 'UCLA Taekwondo',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/ucla_tkd.png',
    studioUrl: 'https://uclaclubsports.com/sports/taek',
    city: 'Los Angeles, CA, USA',
};

const TaeryongTkd: MartialArtsStudio = {
    id: StudioIds.TAERYONG_TKD,
    name: 'Taeryong Taekwondo',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/taeryong_tkd.png',
    studioUrl: 'http://www.trtkd.com/',
    city: 'Santa Monica, CA, USA',
};

const UscTkd: MartialArtsStudio = {
    id: StudioIds.USC_TKD,
    name: 'USC Taekwondo',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/usc_tkd.jpg',
    studioUrl: 'https://sites.google.com/usc.edu/usctkd',
    city: 'Los Angeles, CA, USA',
};

const MtmTkd: MartialArtsStudio = {
    id: StudioIds.MTM_TKD,
    name: 'MTM Taekwondo',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/mtm_tkd.jpg',
    studioUrl: 'http://mtmtaekwondo.com/',
    city: 'Daly City, CA, USA',
};

const TaliumTkd: MartialArtsStudio = {
    id: StudioIds.TALIUM_TKD,
    name: 'Talium Taekwondo',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/talium_tkd.png',
    studioUrl: 'https://www.masterleestalium.com/',
    city: 'Irvine, CA, USA',
};

const MightyFistTkd: MartialArtsStudio = {
    id: StudioIds.MIGHTYFIST_TKD,
    name: 'Mightyfist Taekwon-Do',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/dojang/mightyfist_tkd.jpg',
    studioUrl: 'http://mightyfist.com/',
    city: 'San Jose, CA, USA',
};

const Studios: MartialArtsStudio[] = [
    UcsdTkd,
    YonseiTkd,
    UclaTkd,
    TaeryongTkd,
    UscTkd,
    MtmTkd,
    TaliumTkd,
    MightyFistTkd,
];

export default Studios;
