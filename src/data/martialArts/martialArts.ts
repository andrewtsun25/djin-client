import { MartialArt, MartialArtsType, StudioIds } from 'types/martialArts';

const WorldTaekwondo: MartialArt = {
    biography:
        'During my undergraduate years (2012-2016), I primarily competed for the University of California, ' +
        'San Diego (UCSD) Taekwondo team led by Coach Jacky Baik. As I initially trained in ITF Taekwondo, the style ' +
        'change was a shock to the system, but I quickly adapted over the years, and became proficient. Upon graduation, ' +
        'I was co-captain of a demonstration team of international students while attending Yonsei ' +
        'University in Seoul, Korea (2016/06 - 2016/08). Aside from co-captain duties, I also led ' +
        "practices in Grandmaster Young-Sun Kim's absence. \n" +
        '\n' +
        'Living near University of California, Los Angeles (UCLA) while working allowed me to briefly ' +
        'compete with the university team there for a year under Coaches Mara Perscheid and ' +
        'Kira Cramer (2016/09 - 2017/06). \n' +
        '\n' +
        'After being out of college for a year, I decided to get around to getting a black bellt and pursue Taekwondo ' +
        'more formally at a local studio, Taeryong Taekwondo under Grandmaster Yong-Sup Shin and Masters Nickie Quan ' +
        'and Brandon Meek (2017/06 - 2020/02). While training at Taeryong Taekwondo, I (finally) received my 1st degree ' +
        '(1단) black belt on May 5, 2018 (2018/05/05). \n' +
        '\n' +
        'As a graduate student, I fought on for the USC Taekwondo Team under coaches Spyro Spyropoulos-Spears ' +
        'and Eduardo Belmont (2018/08 - 2020/05). At USC, I regularly represented USC as a Taekwondo PacWest athlete at ' +
        'tournaments, and sometimes even lead team practices. During my second year as a master’s student, ' +
        'I served on the USC Taekwondo Team executive board as Secretary for the 2019-2020 academic year.\n' +
        '\n' +
        'During my time as a YouTube intern in 2019, I briefly trained in the More Than Medals Taekwondo ' +
        'dojang in San Bruno (2019/05 - 2019/08). \n' +
        '\n' +
        'Since the COVID-19 pandemic began in March 2020, I was able to obtain my 2nd Dan (2단) certification ' +
        'from Taeryong Taekwondo with the first socially distanced black belt test in July 19, 2020 (2020/07/19). \n' +
        '\n' +
        'After moving to Irvine to begin working at Anduril Industries, I migrated to Talium Taekwondo, ' +
        'where I not only continued Taekwondo, but also learned to wield a jingum (Korean sword) as well (2020/11 - present).',
    blackBeltRank: 2,
    mediaCaption: '2nd Dan Black Belt Test',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/img/wt_2nd_dan_test.jpeg',
    description:
        'World Taekwondo (WT) style Taekwondo is a more sport-oriented form of Taekwondo, with sparring (겨루기) as its ' +
        'most prominent aspect. More emphasis is placed on speed and kicks, resulting in usage of roughly ' +
        '80% foot techniques and 20% hand techniques. WT-style Taekwondo was created by the South Korean ' +
        'government after General Choi Hong Hi (최홍히) left. It is the style of Taekwondo most people think ' +
        'of, and is the official style promoted by South Korea and featured in the Summer Olympics. ',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/style/wt_logo.png',
    studios: [
        StudioIds.UCSD_TKD,
        StudioIds.YONSEI_TKD,
        StudioIds.UCLA_TKD,
        StudioIds.TAERYONG_TKD,
        StudioIds.USC_TKD,
        StudioIds.MTM_TKD,
        StudioIds.TALIUM_TKD,
    ],
    type: MartialArtsType.WT_TKD,
    name: 'WT Taekwondo',
};

const InternationalTaekwondoFederation: MartialArt = {
    biography:
        'Prior to my undergraduate studies, I trained at the Mightyfist Taekwon-do studio under ' +
        'Master Jason Morris. There, I learned board-breaking, sparring, patterns, and self-defense. ' +
        'As the studio was split into four teams, I received the responsibility of being a patterns ' +
        'coach for Team Alpha. As I graduated high school and prepared to leave for college, I served as an ' +
        'assistant instructor for younger children in color-belt classes. \n' +
        '\n' +
        'While exploring WT Taekwondo for the first time in my undergraduate years at UCSD, I secretly practiced ITF ' +
        'Taekwondo concurrently, and flew home to test for my 1st degree black belt in February 2013 (02/2013). ' +
        'After training in ITF Taekwondo over the summer of 2013 for the last time, I received my 1st degree (1단) black ' +
        'belt in September 2013 (2013/09). Seeing as I was going to be in SoCal for the foreseeable future, and the lack ' +
        'of ITF studios thereof in SoCal, I decided to officially convert to WT Taekwondo.',
    blackBeltRank: 1,
    mediaCaption: '1st Dan Black Belt Ceremony',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/img/itf_1st_dan_test.jpg',
    description:
        'International Taekwon-Do Federation (ITF) taekwon-do closely resembles a traditional martial art more akin to Japanese ' +
        'karate and Chinese kung-fu. There is a stronger emphasis on power and techniques, and thus, ' +
        'patterns (툴). It employs a roughly equal distribution of 50% foot techniques and 50% hand ' +
        'techniques. While it was created by General Choi Hong Hi (최홍히) in South Korea, ITF-style ' +
        'taekwon-do is not endorsed by South Korea. It is headquartered in Vienna, Austria, and is ' +
        'more popular in Europe and North Korea. ',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/style/itf_logo.png',
    studios: [StudioIds.MIGHTYFIST_TKD],
    type: MartialArtsType.ITF_TKD,
    name: 'ITF Taekwondo',
};

const HaidongGumdo: MartialArt = {
    biography:
        'As I began training at Talium Taekwondo, I never really learned how to properly wield any kind of sword. ' +
        'Through training with a bamboo sword (죽검), I was able to learn basic cutting techniques (베기), sword stances (세), ' +
        'and sword forms (검법). So far, I have achieved the ability to cut newspaper precisely with a bamboo sword instead of ' +
        'using scissors like a white belt.',
    blackBeltRank: 2,
    mediaCaption: 'A really cool picture of Haidong Gumdo since I keep breaking phone cameras with my sword.',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/img/hdgd_placeholder.png',
    description:
        'Haidong Gumdo (해동검도) is a Korean sword martial art founded in 1983. Rather than focusing on sword combat, ' +
        'Haidong Gumdo primarily focuses on increasing concentration through the precision and accuracy of sword techniques. ' +
        'In a sense, Haidong Gumdo is akin to Japanese Iaido (居合道).',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/martialArts/logo/style/hdgd_logo.png',
    studios: [StudioIds.TALIUM_TKD],
    type: MartialArtsType.HDGD,
    name: 'Haidong Gumdo',
};

export { HaidongGumdo, InternationalTaekwondoFederation, WorldTaekwondo };
