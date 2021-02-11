import mightyFistTkdLogo from 'assets/martialArts/logo/dojang/mightyfist_tkd.jpg';
import mtmTkdLogo from 'assets/martialArts/logo/dojang/mtm_tkd.jpg';
import taeryongTkdLogo from 'assets/martialArts/logo/dojang/taeryong_tkd.png';
import taliumTkdLogo from 'assets/martialArts/logo/dojang/talium_tkd.png';
import uclaTkdLogo from 'assets/martialArts/logo/dojang/ucla_tkd.png';
import ucsdTkdLogo from 'assets/martialArts/logo/dojang/ucsd_tkd.png';
import uscTkdLogo from 'assets/martialArts/logo/dojang/usc_tkd.jpg';
import yonseiTkdLogo from 'assets/martialArts/logo/dojang/yonsei_intl_tkd.png';
import hdgdLogo from 'assets/martialArts/logo/style/hdgd.png';
import itfLogo from 'assets/martialArts/logo/style/itf.png';
import wtLogo from 'assets/martialArts/logo/style/wt.png';
import hdgdImg from 'assets/martialArts/media/hdgd_placeholder.png';
import itfImg from 'assets/martialArts/media/itf_1st_dan_test.jpg';
import wtTmg from 'assets/martialArts/media/wt_2nd_dan_test.jpeg';
import { MartialArt, MartialArtsStyle, Studio } from 'types/martialArts';

const UcsdTkd: Studio = {
    name: 'UCSD Taekwondo',
    logoUrl: ucsdTkdLogo,
    href: 'https://www.facebook.com/groups/ucsdtkd/',
    location: 'San Diego, CA, USA',
};

const YonseiTkd: Studio = {
    name: "Yonsei Int'l Taekwondo Academy",
    logoUrl: yonseiTkdLogo,
    href: 'http://web.yonsei.ac.kr/yitaekwondo/',
    location: 'Seoul, South Korea',
};

const UclaTkd: Studio = {
    name: 'UCLA Taekwondo',
    logoUrl: uclaTkdLogo,
    href: 'https://uclaclubsports.com/sports/taek',
    location: 'Los Angeles, CA, USA',
};

const TaeryongTkd: Studio = {
    name: 'Taeryong Taekwondo',
    logoUrl: taeryongTkdLogo,
    href: 'http://www.trtkd.com/',
    location: 'Santa Monica, CA, USA',
};

const UscTkd: Studio = {
    name: 'USC Taekwondo',
    logoUrl: uscTkdLogo,
    href: 'https://sites.google.com/usc.edu/usctkd',
    location: 'Los Angeles, CA, USA',
};

const MtmTkd: Studio = {
    name: 'MTM Taekwondo',
    logoUrl: mtmTkdLogo,
    href: 'http://mtmtaekwondo.com/',
    location: 'Daly City, CA, USA',
};

const TaliumTkd: Studio = {
    name: 'Talium Taekwondo',
    logoUrl: taliumTkdLogo,
    href: 'https://www.masterleestalium.com/',
    location: 'Irvine, CA, USA',
};

const MightyFistTkd: Studio = {
    name: 'Mightyfist Taekwon-Do',
    logoUrl: mightyFistTkdLogo,
    href: 'http://mightyfist.com/',
    location: 'San Jose, CA, USA',
};

const WorldTaekwondo: MartialArt = {
    biography:
        'During my undergraduate years (2012-2016), I primarily competed for the University of California, ' +
        'San Diego (UCSD) Taekwondo team led by Coach Jacky Baik. Upon graduation, ' +
        'I was co-captain of a demonstration team of international students while attending Yonsei ' +
        'University in Seoul, Korea (2016/06 - 2016/08). Aside from co-captain duties, I also led ' +
        "practices in Grandmaster Young-Sun Kim's absence. \n" +
        '\n' +
        'Living near University of California, Los Angeles (UCLA) while working allowed me to briefly ' +
        'compete with the university team there for a year under Coaches Mara Perscheid and ' +
        'Kira Cramer (2016/09 - 2017/06). \n' +
        '\n' +
        'After being out of college for a year, I decided to pursue Taekwondo more formally at a local ' +
        'studio, Taeryong Taekwondo under Grandmaster Yong-Sup Shin and Masters Nickie Quan and Brandon ' +
        'Meek (2017/06 - 2020/02). While training at Taeryong Taekwondo, I received my 1st degree (1단) ' +
        'black belt on May 5, 2018 (2018/05/05). \n' +
        '\n' +
        'As a graduate student, I fought on for the USC Taekwondo Team under coaches Spyro Spyropoulos-Spears ' +
        'and Eduardo Belmont (2018/08 - 2020/05). At USC, I regularly represented USC as a Taekwondo PacWest athlete at ' +
        'tournaments, and sometimes even lead team practices. During my second year as a master’s student, ' +
        'I served on the USC Taekwondo Team executive board as Secretary for the 2019-2020 academic year.\n' +
        '\n' +
        'During my time as a YouTube intern in 2019, I briefly trained in the More Than Medals Taekwondo ' +
        'dojang in San Bruno (2019/05 - 2019/08). \n' +
        '\n' +
        'Since the COVID-19 pandemic began in March 2020, I was able to obtain my 2nd Dan certification ' +
        'from Taeryong Taekwondo with the first socially distanced black belt test in July 19, 2020 (2020/07/19). \n' +
        '\n' +
        'After moving to Irvine to begin working at Anduril Industries, I migrated to Talium Taekwondo, ' +
        'where I not only continued Taekwondo, but also learned to wield a jingum (Korean sword) as well (2020/11 - present).',
    blackBeltRank: 2,
    imgCaption: '2nd Dan Black Belt Test',
    imgUrl: wtTmg,
    introduction:
        'World Taekwondo (WT) style Taekwondo is a more sport-oriented form of Taekwondo, with sparring (겨루기) as its ' +
        'most prominent aspect. More emphasis is placed on speed and kicks, resulting in usage of roughly ' +
        '80% foot techniques and 20% hand techniques. WT-style Taekwondo was created by the South Korean ' +
        'government after General Choi Hong Hi (최홍히) left. It is the style of Taekwondo most people think ' +
        'of, and is the official style promoted by South Korea and featured in the Summer Olympics. ',
    logoUrl: wtLogo,
    studios: [UcsdTkd, YonseiTkd, UclaTkd, TaeryongTkd, UscTkd, MtmTkd, TaliumTkd],
    style: MartialArtsStyle.WT_TKD,
    styleName: 'WT Taekwondo',
};

const InternationalTaekwondoFederation = {
    biography:
        'Prior to my undergraduate studies, I trained at the Mightyfist Taekwon-do dojang under ' +
        'Master Jason Morris. There, I learned board-breaking, sparring, patterns, and self-defense. ' +
        'As the dojang was split into four teams, I received the responsibility of being a patterns ' +
        'coach for Team Alpha. Prior to receiving my black belt, I served as an assistant instructor ' +
        'for younger children in color-belt classes. I received my 1st degree (1단) black belt ' +
        'in September 2013 (2013/09). ',
    blackBeltRank: 1,
    imgCaption: '1st Dan Black Belt Ceremony',
    imgUrl: itfImg,
    introduction:
        'International Taekwon-Do Federation (ITF) taekwon-do closely resembles a traditional martial art more akin to Japanese ' +
        'karate and Chinese kung-fu. There is a stronger emphasis on power and techniques, and thus, ' +
        'patterns (툴). It employs a roughly equal distribution of 50% foot techniques and 50% hand ' +
        'techniques. While it was created by General Choi Hong Hi (최홍히) in South Korea, ITF-style ' +
        'taekwon-do is not endorsed by South Korea. It is headquartered in Vienna, Austria, and is ' +
        'more popular in Europe and North Korea. ',
    logoUrl: itfLogo,
    studios: [MightyFistTkd],
    style: MartialArtsStyle.ITF_TKD,
    styleName: 'ITF Taekwondo',
};

const HaidongGumdo = {
    biography:
        'As I began training at Talium Taekwondo, I never really learned how to properly wield any kind of sword. ' +
        'Through training with a bamboo sword (죽검), I was able to learn basic cutting techniques (베기), sword stances (세), ' +
        'and sword forms (검법). So far, I have achieved the ability to cut newspaper precisely with a bamboo sword instead of ' +
        'using scissors like a white belt.',
    blackBeltRank: 2,
    imgCaption: 'A really cool picture of Haidong Gumdo since I keep breaking phone cameras with my sword.',
    imgUrl: hdgdImg,
    introduction:
        'Haidong Gumdo (해동검도) is a Korean sword martial art founded in 1983. Rather than focusing on sword combat, ' +
        'Haidong Gumdo primarily focuses on increasing concentration through the precision and accuracy of sword techniques. ' +
        'In a sense, Haidong Gumdo is akin to Japanese Iaido (居合道).',
    logoUrl: hdgdLogo,
    studios: [TaliumTkd],
    style: MartialArtsStyle.HDGD,
    styleName: 'Haidong Gumdo',
};

export { HaidongGumdo, InternationalTaekwondoFederation, WorldTaekwondo };
