import { DateTime } from 'luxon';
import { Project } from 'types/project/Project';

import { USC } from '../const/semester';
import { Amazon, Anduril, CouponsCom, Google, HLI, Yahoo1, Yahoo2 } from './employment';

const BrandCaster: Project = {
    name: 'BrandCaster',
    organization: CouponsCom.company,
    logoUrl: CouponsCom.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/qt_brandcaster.jpg',
    startDate: CouponsCom.startDate,
    endDate: DateTime.fromISO('2013-08-02T17:00:00-08:00'),
    description:
        'Brandcaster is a Facebook application that allows retailers to easily provide online coupons to customers through their Facebook pages.',
    responsibilities: [
        'Wrote front-end E2E tests in Java using Selenium and TestNG frameworks.',
        'Automated unit tests in CI builds with Jenkins and Selenium Grid.',
    ],
    skills: ['Java', 'Scala', 'Selenium Webdriver', 'JUnit', 'ScalaUnit', 'Jenkins'],
    projectLink: 'https://brandcaster.coupons.com/home/',
};

const CLOE: Project = {
    name: 'BrandCaster',
    organization: CouponsCom.company,
    logoUrl: CouponsCom.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/qt_cloe.png',
    startDate: DateTime.fromISO('2013-08-02T17:00:00-08:00'),
    endDate: CouponsCom.endDate,
    description:
        'Card-linked offers allow Coupons.com coupons to be linked to credit cards such that upon credit card payment, the relevant coupons can automatically be applied. ',
    responsibilities: [
        'Tested credit card linkage to coupons on the front end in Scala using the ScalaTest and Selenium frameworks. My manager really wanted to learn Scala at the time and thought it was a great idea for the entire team to use it. ',
        'Tested coupon redemption transactional integrity on the back end in Java using JUnit, JDBC, and a MySQL database.',
    ],
    skills: ['Scala', 'Selenium Webdriver', 'ScalaUnit', 'Spring', 'MySQL', 'JDBC'],
    projectLink: 'https://www.coupons.com/coupon-codes/',
};

const QueryCategorizationModuleImplementation: Project = {
    name: 'Query Categorization Module: Implementation',
    organization: Yahoo1.company,
    logoUrl: Yahoo1.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/yahoo_gemini.png',
    startDate: Yahoo1.startDate,
    endDate: DateTime.fromISO('2014-08-19T17:00:00-08:00'),
    description:
        'Advertisers pay Yahoo! more money to have their ads displayed when a more relevant keyword is searched. Instead, advertisers bought rights to a larger quantity of frequently searched, irrelevant keywords, increasing the frequency of their ads triggering. To combat this abuse of the system, I wrote an ad-serving filter that prevents the abuse of misused bidded words from advertisers through the categorization of api. I also realized how much Yahoo! is used to search up pornography.',
    responsibilities: [
        'Designed & Implemented the module in C++ using the Boost library.',
        'Module was presented to Jay Rossiter, Senior Vice President of Yahoo! as an intern demonstration',
    ],
    skills: ['C++', 'Boost'],
};

const QueryCategorizationModuleAnalysis: Project = {
    name: 'Query Categorization Module: Analysis',
    organization: Yahoo1.company,
    logoUrl: Yahoo1.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/yahoo_gemini.png',
    startDate: DateTime.fromISO('2014-08-19T17:00:00-08:00'),
    endDate: Yahoo1.endDate,
    description:
        'Advertisers pay Yahoo! more money to have their ads displayed when a more relevant keyword is searched. Instead, advertisers bought rights to a larger quantity of frequently searched, irrelevant keywords, increasing the frequency of their ads triggering. To combat this abuse of the system, I wrote an ad-serving filter that prevents the abuse of misused bidded words from advertisers through the categorization of api. After developing the module, I performed continual monitoring and statistical analysis to determine the success of this module.',
    responsibilities: [
        'Developed a Apache Pig script to collect and transform analytical data on the Query Module from a Hadoop Distributed Filesystem (HDFS)',
        'Prepared an end-of-internship report describing the efficacy of my module using Pig script runs as evidence.',
    ],
    skills: ['Apache Pig', 'Apache Hadoop'],
};

const PipelineDetailsDashboard: Project = {
    name: 'Data Pipeline Dashboard Improvements',
    organization: Yahoo2.company,
    logoUrl: Yahoo2.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/yahoo_pipeline-dashboard.png',
    startDate: Yahoo2.startDate,
    endDate: DateTime.fromISO('2015-07-15T09:00:00-08:00'),
    description:
        "Previously, the data pipeline reporting UI for Yahoo's advertising platform could only visualize the current state or history of a single data pipeline. The reporting team would have to manually sift through multiple pipelines every day. Created a high-level visualization of all pipelines to reduce reporting chores",
    responsibilities: [
        'Created a new dashboard via pure HTML, CSS and jQuery, calling upon an existing Spring REST endpoint written in Java.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'moment.js'],
};

const PipelineSummaryDashboard: Project = {
    name: 'Data Pipeline Summary Dashboard',
    organization: Yahoo2.company,
    logoUrl: Yahoo2.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/yahoo_summary-dashboard.png',
    startDate: DateTime.fromISO('2015-07-15T09:00:00-08:00'),
    endDate: DateTime.fromISO('2015-08-15T09:00:00-08:00'),
    description:
        "Previously, the data pipeline reporting UI for Yahoo's advertising platform could only view the current state of a single data pipeline. If a pipeline broke, the developers would have to manually sift through pipeline history by exhaustive SQL api. Developed a visualization of data pipeline history to speed up data pipeline debugging.",
    responsibilities: ['Existing dashboard was modified via editing pure HTML, CSS and jQuery'],
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'moment.js'],
};

const CloseOfBooksDashboard: Project = {
    name: 'Close-Of-Books Dashboard',
    organization: Yahoo2.company,
    logoUrl: Yahoo2.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/yahoo_cob-dashboard.png',
    startDate: DateTime.fromISO('2015-08-15T09:00:00-08:00'),
    endDate: Yahoo2.endDate,
    description:
        "Created an extension to the monitoring UI for Yahoo's advertising platform: a dashboard to monitor the progress of data-aggregation jobs of advertisement revenue across all known time zones. Yahoo needs to know how much to charge its international clients. Once all jobs across all time zones are completed, a job responsible for close-of-books report can then be generated for internal monitoring purposes. ",
    responsibilities: [
        'Designed and implemented a front-end Close-of-Books dashboard written with HTML and jQuery',
        'Implemented a backend-API in Java using Spring MVC',
        'Retrieved data from an Oracle database with api in PL/SQL.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'moment.js', 'Spring', 'Java', 'JDBC', 'Oracle DB', 'PL/SQL'],
};

const Defiance: Project = {
    name: 'Defiance',
    organization: 'UCSD Intervarsity',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/logo/intervarsity_ucsd_logo.png',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/urbana_2015.jpg',
    startDate: Yahoo2.startDate,
    endDate: Yahoo2.endDate,
    description:
        'Developed a video game during #Hack4Missions, a Christian hackathon, that brings awareness to the despair refugees around the world face in their respective crises. Players assume the role of a refugee discriminated against for eye color, and uses stealth/social interactions to find the abducted members of their family, like Silent Hill. Impressed the Greater Europe Mission (GEM) refugee aid organization with our hackathon demonstration, and the game was briefly in development for GEM.',
    responsibilities: [
        'Developed a playable demo in Unity, with code written in C#.',
        'Composed an original soundtrack with Finale.',
    ],
    skills: ['C#', 'Unity', 'Finale'],
    projectLink: 'https://github.com/TactualNick/projectrefuge',
};

const TestHarness: Project = {
    name: 'Mantis: QA Test Harness',
    organization: HLI.company,
    logoUrl: HLI.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/hli_mantis.png',
    startDate: HLI.startDate,
    endDate: DateTime.fromISO('2016-03-26T09:00:00-08:00'),
    description:
        'Prior to Human Longevity’s eventual integration of Cypher Genomics assets, Cypher Genomics had the Mantis Genome Interpretation Engine. Mantis is currently used in other parts of Human Longevity infrastructure.',
    responsibilities: [
        'Designed and implemented an automated test harness in Java to validate Mantis-generated PDF reports against inputted genome files (VCF).',
    ],
    skills: ['UML', 'Java'],
};

const DataCurationParsers: Project = {
    name: 'Mantis: Data Curation Parsers for Cancer Exome Report Generation',
    organization: HLI.company,
    logoUrl: HLI.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/hli_mantis.png',
    startDate: DateTime.fromISO('2016-03-26T09:00:00-08:00'),
    endDate: HLI.endDate,
    description:
        'Prior to Human Longevity’s eventual integration of Cypher Genomics assets, Cypher Genomics had the Mantis Genome Interpretation Engine. Mantis is currently used in other parts of Human Longevity infrastructure.',
    responsibilities: [
        'Wrote scripts in Python to collect data curated from external biological databases and standardize them for cancer exome report generation.',
        'Uploaded standardized data into MongoDB',
    ],
    skills: ['Python', 'MongoDB'],
};

const Withoutabox: Project = {
    name: 'Withoutabox',
    organization: Amazon.company,
    logoUrl: Amazon.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/amazon_withoutabox.png',
    startDate: Amazon.startDate,
    endDate: Amazon.endDate,
    description:
        "Worked on developing various features on Withoutabox, a website that allows independent filmmakers to connect with film festivals. Also enabled these film festivals to crush their filmmaker's dreams.",
    responsibilities: [
        'Created a judging form builder using React/Redux and AWS DynamoDB to allow film festivals to create custom judging forms for their judges.',
        'Created a mass messaging system to allow film festival administrators to send custom templated spam (messages) en masse to applicants using React/Redux, AWS Simple Workflow, and DynamoDB.',
        'Increased security in the backend by implementing anti-CSRF security measures on the legacy PHP codebase.',
        'Performed security reviews on site features to ensure compliance with Amazon security standards.',
    ],
    skills: [
        'React',
        'Redux',
        'PHP',
        'Java',
        'AWS OpsWorks',
        'AWS CloudWatch',
        'AWS DynamoDB',
        'AWS EC2',
        'AWS Data Pipeline',
        'Cucumber',
        'Ruby',
    ],
    disclaimer: 'Due to tough competition from FilmFreeway, Withoutabox was terminated by Amazon on October 30, 2019.',
    projectLink: 'https://www.withoutabox.com',
};

const BeyondTheGrind: Project = {
    name: 'Beyond The Grind',
    organization: 'Beyond The Grind',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/logo/btg_logo.png',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/btg_site.jpg',
    startDate: DateTime.fromISO('2018-06-20T00:00:00-08:00'),
    endDate: DateTime.fromISO('2018-07-20T00:00:00-08:00'),
    description:
        'Beyond The Grind is a Christian apparel shop owned and managed by Nicholas D. Spotts. Working on this project is my first foray into web design, including content, UX, and aesthetics. I also learned about integration and developing with a payment/inventory system.',
    responsibilities: [
        'Implemented an online storefront entirely on the Squarespace platform.',
        'Integrated online payments with Stripe, a payment/inventory system.',
    ],
    disclaimer: 'This site has been closed by its owner for financial reasons.',
    skills: ['Stripe', 'Squarespace'],
};

const FearlessLASite: Project = {
    name: 'Fearless LA Website v2.0',
    organization: 'Fearless LA',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/logo/fearless_la_logo.png',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/fearless_website.png',
    startDate: DateTime.fromISO('2018-04-16T00:00:00-08:00'),
    endDate: DateTime.fromISO('2019-01-01T00:00:00-08:00'),
    description:
        'Fearless LA formerly had a disorganized website that no one could use, and multiple tools across the organization that incurred a hefty technology budget expense. Through ChurchBase, I was able to design a website that separated front-end from back-end, empowering non-technical church leaders to update site content easily without direct dependence on a web designer. This content would then be propagated to a mobile app the platform provided (see below for Fearless LA Mobile). ChurchBase also provides a suite of church-friendly tools such as a giving platform for offerings and tithes as well as member portals for users to manage their own involvement with Fearless LA, reducing our dependency on other platforms and data synchronization errors. While all seemed well with the initial launch, ChurchBase’s technology stack was largely unreliable, crashing frequently, with slow turnaround on support requests. Due to unbearable technical issues with ChurchBase, the website has since been transferred to Squarespace, but redesigned with my original design and layout. Squarespace has a much cleaner design, intuitive interface, and robust platform. However, we were unable to achieve the goal of having a mobile application that connected with the same backend as Squarespace, as well as reducing dependency on other tools. ',
    responsibilities: [
        'Met with stakeholders (the church board) to discuss available options and pricing.',
        'Led a team of 5 to design and create site content.',
        'Designed the content, layout, and interaction of pages on the website.',
        'Built all original pages on ChurchBase using their webpage design tool, using custom HTML embeds, CSS classes, and scripts written in either Javascript or PHP whenever necessary. ChurchBase’s web application stack was an implementation of WordPress on LAMP (Linux, Apache HTTP Server, MySQL Database, PHP).',
        'Redesigned all pages on the Squarespace platform after transferring the domain from ChurchBase to Squarespace.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'ChurchBase'],
    projectLink: 'https://www.fearlessla.com',
};

const FearlessLAMobile: Project = {
    name: 'Fearless LA Mobile v1.0',
    organization: 'Fearless LA',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/logo/fearless_la_logo.png',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/fearless_mobile.png',
    startDate: DateTime.fromISO('2018-04-16T00:00:00-08:00'),
    endDate: DateTime.fromISO('2019-01-01T00:00:00-08:00'),
    description:
        'Fearless LA had a mobile application that was for iOS only that was barely maintained due to the lack of app developers within the church body. With the migration to Church Base, Fearless LA was also provided with the opportunity to have a mobile app that was easy to maintain, and could run on Android, iOS, and the Amazon App Store. As the principal mobile app developer at Fearless LA, I collaborated with a mobile app developer from Church Base to create an mobile app where app content can easily be updated and maintained on the existing Church Base content management system.',
    responsibilities: [
        'Collaborated with a mobile app developer from Church Base to create a mobile app where app content can easily be updated and maintained on the existing Church Base content management system.',
    ],
    disclaimer:
        'Due to technical issues with Church Base, the mobile application never got released on any platform. However, a version of the app is still deployed on their system.',
    skills: ['Teamwork'],
};

const SamsungTVs: Project = {
    name: 'Enable Hardware Keyboard Support on Samsung TVs for YouTube',
    organization: 'Google',
    logoUrl: Google.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/google_samsung-tv.jpg',
    startDate: Google.startDate,
    endDate: DateTime.fromISO('2019-06-10T09:00:00-08:00'),
    description:
        'In the past, Samsung devices were known to have compatibility issues with YouTube on smart TVs, noticeably with unresponsive or wrong input. Even though these were fixed 3 years ago, support was still not allowed for Samsung devices. YouTube would not like to be known for its 3-year SLAs.',
    responsibilities: [
        'Selectively hardware keyboard support for only devices known to be compatible with YouTube on TV application. Modified device checkers written in TypeScript to verify by Samsung device model number regular expressions.',
        "Searched YouTube videos for hours in front of Samsung TV's using a hardware keyboard (as part of the QA process, I swear).",
    ],
    skills: ['TypeScript', 'QA Testing'],
};

const ViTelex: Project = {
    name: 'Vietnamese Telex IME for YouTube on Virtual Keyboard',
    organization: 'Google',
    logoUrl: Google.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/google_vi-telex.jpg',
    startDate: DateTime.fromISO('2019-06-10T09:00:00-08:00'),
    endDate: DateTime.fromISO('2019-07-10T09:00:00-08:00'),
    description:
        'Vietnamese users are our 3rd biggest demographic at YouTube. Yet, we don\'t have a way for them to accurately type Vietnamese to search for videos on smart TVs. For example, "bộ” means "walk", while “bò” means "beef". Not knowing which "bo" to search for can be a huge issue. Another huge issue: I don\'t speak Vietnamese.',
    responsibilities: [
        'Implemented a Vietnamese Telex keyboard which transliterates Latin character input into Vietnamese letters.',
        'Designed a language switching mechanism to switch between Vietnamese and English input.',
        'Pioneered a standard QA process for verifying and launching new languages.',
        'Performed statistical tests on metrics gathered using in-house experimentation frameworks.',
        'Did not learn Vietnamese. Still trilingual.',
    ],
    skills: ['TypeScript', 'SCSS', 'protobuf'],
};

const LetterSuggestions: Project = {
    name: 'Letter Suggestions',
    organization: 'Google',
    logoUrl: Google.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/google_letter-suggestions.png',
    startDate: DateTime.fromISO('2019-07-10T09:00:00-08:00'),
    endDate: Google.endDate,
    description:
        'Languages other than English often have special characters which are important for spelling. For example, French people searching for videos on "same" items (même) would probably not be searching for memes. YouTube on TV\'s new virtual keyboard cannot type special characters. Interfacing with the GBoard framework for virtual keyboards, I helped design the virtual keyboard\'s ability to type special characters.',
    responsibilities: [
        'Drafted a design document proposing multiple approaches to the integration of GBoard with the virtual keyboard and describing technical details to do so.',
        'Designed virtual controller view components for special character suggestions.',
        'Implemented new GBoard controller components while integrating with existing ones.',
        'Learned to enforce typing in JavaScript for compilation with Google Closure Compiler.',
        'As proof of concept, configured a French IME using the AZERTY layout. Did not learn French. Still trilingual.',
    ],
    skills: ['TypeScript', 'JavaScript', 'protobuf', 'Google Closure Compiler'],
};

const UscTaekwondoWebsite: Project = {
    name: 'USC Taekwondo Website v2.0',
    organization: 'USC Taekwondo',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/logo/usc_tkd_logo.jpg',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/usctkd_website.png',
    startDate: USC.Fall2019.date,
    endDate: USC.Graduation.date,
    description:
        'With a strong desire to move away from using a free WordPress site cluttered with ads, the USC Taekwondo team commissioned me to create a new static website to give members information about team practices and policies. After realizing that all USC students are part of one giant G-Suite, we determined that using Google Sites provides us with a better website at no additional cost.',
    responsibilities: [
        'Developed a static website using the Google Sites platform.',
        'Collaborated with the Public Relations Officer and other USC Taekwondo Executive Board officers to design site content and gather site assets (images, RCC policies, etc.).',
        "Served as the site's webmaster for the entire duration of my term as Secretary, keeping club information up-to-date.",
    ],
    skills: ['Google Sites', 'Leadership'],
    projectLink: 'https://sites.google.com/usc.edu/usctkd',
};

const Metrix: Project = {
    name: 'Metrix',
    organization: Anduril.company,
    logoUrl: Anduril.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/classified.jpg',
    startDate: Anduril.startDate,
    description:
        'Designing and developing Metrix, a UI that visualizes object classification and tracking data from networks of Anduril assets (towers and drones). The Perception team, mission operations team, and business operations team use my app to analyze training model performance and improve existing training models for object classification. The app is primarily written in React and TypeScript, visualizing data via Blueprint.js. ',
    responsibilities: [],
    skills: ['React', 'TypeScript', 'SCSS', 'Blueprint.js', 'protobuf', 'gRPC'],
};

const LattticeControlApp: Project = {
    name: 'Lattice UI',
    organization: Anduril.company,
    logoUrl: Anduril.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/anduril_lattice.jpg',
    startDate: DateTime.fromISO('2020-10-10T09:00:00-08:00'),
    description:
        'Assisting in the development for Lattice Control Application, a user interface for Lattice AI, our flagship software that fuses real-time sensor data from Anduril assets (towers and drones) into a single command center. Also developing cUAS (counter unmanned aerial systems) capabilities for Lattice AI as well. The control application is written in React and Typescript, using Redux for state management and Blueprint.js (from Palantír) for UI components.',
    responsibilities: [
        'Created app pop-outs to visualize Anduril tower data and issue object tracking commands',
        'Added UI components to easily manipulate control application settings.',
    ],
    skills: ['React', 'Redux', 'TypeScript', 'SCSS', 'CSS', 'Blueprint.js', 'protobuf', 'gRPC'],
    projectLink: 'https://www.anduril.com/work',
};

const Capacitor: Project = {
    name: 'Capacitor',
    organization: Anduril.company,
    logoUrl: Anduril.logoUrl,
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/classified.jpg',
    startDate: DateTime.fromISO('2021-01-04T09:00:00-08:00'),
    description:
        'Developing Capacitor, an implementation of version control for data similar to Git for code. Capacitor is built with gRPC APIs, data stored in AWS S3, and queried via Apache Spark.',
    responsibilities: [
        'Developed a front end in React and Typescript that allows for querying Capacitor via Spark SQL and visualizing query results via Blueprint.js data tables.',
    ],
    skills: ['React', 'TypeScript', 'SCSS', 'Blueprint.js', 'protobuf', 'gRPC'],
};

const DjinDev: Project = {
    name: 'djin.dev',
    organization: 'djin',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/logo/djin_logo.png',
    mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/projects/media/djin_dev.png',
    startDate: DateTime.fromISO('2021-02-04T09:00:00-08:00'),
    description:
        'Figured that the best way to provide a code sample to recruiters/interviewers is to give it to them ' +
        'right under their noses while they are looking for it. I am also not fond of owing Squarespace money for my personal website.',
    responsibilities: [
        `Designed a front-end for my application in React and TypeScript, styled with Material UI`,
        'Coming Soon: DB in Firestore, Node backend w/ GraphQL communication, assets stored in separate bucket',
    ],
    skills: ['React', 'TypeScript', 'JSS', 'Material UI', 'GCP Cloud Storage', 'GCP Cloud Build'],
    projectLink: 'https://github.com/andrewtsun25/djin',
};

const CodingProjects: Project[] = [
    BrandCaster,
    CLOE,
    QueryCategorizationModuleImplementation,
    QueryCategorizationModuleAnalysis,
    PipelineDetailsDashboard,
    PipelineSummaryDashboard,
    CloseOfBooksDashboard,
    TestHarness,
    DataCurationParsers,
    Withoutabox,
    BeyondTheGrind,
    Defiance,
    FearlessLASite,
    FearlessLAMobile,
    SamsungTVs,
    ViTelex,
    LetterSuggestions,
    UscTaekwondoWebsite,
    Metrix,
    LattticeControlApp,
    Capacitor,
    DjinDev,
];

export { CodingProjects };
