import amazonLogo from 'assets/experience/logo/amazon.png';
import qtLogo from 'assets/experience/logo/qt.jpeg';
import yahooLogo from 'assets/experience/logo/yahoo.jpeg';
import btgLogo from 'assets/projects/logo/btg.png';
import fearlessLogo from 'assets/projects/logo/fearless_la.png';
import withoutaboxImg from 'assets/projects/media/amazon_withoutabox.png';
import btgImg from 'assets/projects/media/btg_site.jpg';
import fearlessWebsiteImg from 'assets/projects/media/fearless_website.png';
import mantisImg from 'assets/projects/media/hli_mantis.png';
import brandcasterImg from 'assets/projects/media/qt_brandcaster.jpg';
import cloeImg from 'assets/projects/media/qt_cloe.png';
import urbanaImg from 'assets/projects/media/urbana_2015.jpg';
import cobDashboardImg from 'assets/projects/media/yahoo_cob-dashboard.png';
import queryCategorizationModuleImg from 'assets/projects/media/yahoo_gemini.png';
import pipelineDashboardImg from 'assets/projects/media/yahoo_pipeline-dashboard.png';
import summaryDashboardImg from 'assets/projects/media/yahoo_summary-dashboard.png';
import { DateTime } from 'luxon';
import { Project } from 'types/Project';

import { Amazon, CouponsCom, HLI, Yahoo1, Yahoo2 } from './experience';

const BrandCaster: Project = {
    name: 'BrandCaster',
    organization: CouponsCom.company,
    avatarUrl: qtLogo,
    mediaUrl: brandcasterImg,
    startDate: CouponsCom.startDate,
    endDate: CouponsCom.endDate,
    description:
        'Brandcaster is a Facebook application that allows retailers to easily provide online coupons to customers through their Facebook pages.',
    responsibilities: [
        'Wrote front-end E2E tests in Java using Selenium and TestNG frameworks.',
        'Automated unit tests in CI builds with Jenkins and Selenium Grid.',
    ],
    skills: ['Java', 'Scala', 'Selenium Webdriver', 'JUnit', 'ScalaUnit', 'Jenkins'],
};

const CLOE: Project = {
    name: 'BrandCaster',
    organization: CouponsCom.company,
    avatarUrl: qtLogo,
    mediaUrl: cloeImg,
    startDate: CouponsCom.startDate,
    endDate: CouponsCom.endDate,
    description:
        'Card-linked offers allow Coupons.com coupons to be linked to credit cards such that upon credit card payment, the relevant coupons can automatically be applied. ',
    responsibilities: [
        'Tested credit card linkage to coupons on the front end in Scala using the ScalaTest and Selenium frameworks. My manager really wanted to learn Scala at the time and thought it was a great idea for the entire team to use it. ',
        'Tested coupon redemption transactional integrity on the back end in Java using JUnit, JDBC, and a MySQL database.',
    ],
    skills: ['Scala', 'Selenium Webdriver', 'ScalaUnit', 'Spring', 'MySQL', 'JDBC'],
};

const QueryCategorizationModuleImplementation: Project = {
    name: 'Query Categorization Module: Implementation',
    organization: Yahoo1.company,
    avatarUrl: yahooLogo,
    mediaUrl: queryCategorizationModuleImg,
    startDate: Yahoo1.startDate,
    endDate: Yahoo1.endDate,
    description:
        'Advertisers pay Yahoo! more money to have their ads displayed when a more relevant keyword is searched. Instead, advertisers bought rights to a larger quantity of frequently searched, irrelevant keywords, increasing the frequency of their ads triggering. To combat this abuse of the system, I wrote an ad-serving filter that prevents the abuse of misused bidded words from advertisers through the categorization of queries. I also realized how much Yahoo! is used to search up pornography.',
    responsibilities: [
        'Designed & Implemented the module in C++ using the Boost library.',
        'Module was presented to Jay Rossiter, Senior Vice President of Yahoo! as an intern demonstration',
    ],
    skills: ['C++', 'Boost'],
};

const QueryCategorizationModuleAnalysis: Project = {
    name: 'Query Categorization Module: Analysis',
    organization: Yahoo1.company,
    avatarUrl: yahooLogo,
    mediaUrl: queryCategorizationModuleImg,
    startDate: Yahoo1.startDate,
    endDate: Yahoo1.endDate,
    description:
        'Advertisers pay Yahoo! more money to have their ads displayed when a more relevant keyword is searched. Instead, advertisers bought rights to a larger quantity of frequently searched, irrelevant keywords, increasing the frequency of their ads triggering. To combat this abuse of the system, I wrote an ad-serving filter that prevents the abuse of misused bidded words from advertisers through the categorization of queries. After developing the module, I performed continual monitoring and statistical analysis to determine the success of this module.',
    responsibilities: [
        'Developed a Apache Pig script to collect and transform analytical data on the Query Module from a Hadoop Distributed Filesystem (HDFS)',
        'Prepared an end-of-internship report describing the efficacy of my module using Pig script runs as evidence.',
    ],
    skills: ['Apache Pig', 'Apache Hadoop'],
};

const PipelineDetailsDashboard: Project = {
    name: 'Data Pipeline Dashboard Improvements',
    organization: Yahoo2.company,
    avatarUrl: yahooLogo,
    mediaUrl: pipelineDashboardImg,
    startDate: Yahoo2.startDate,
    endDate: Yahoo2.endDate,
    description:
        "Previously, the data pipeline reporting UI for Yahoo's advertising platform could only visualize the current state or history of a single data pipeline. The reporting team would have to manually sift through multiple pipelines every day. Created a high-level visualization of all pipelines to reduce reporting chores",
    responsibilities: [
        'Created a new dashboard via pure HTML, CSS and jQuery, calling upon an existing Spring REST endpoint written in Java.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript (ES5)', 'jQuery', 'moment.js'],
};

const PipelineSummaryDashboard: Project = {
    name: 'Data Pipeline Summary Dashboard',
    organization: Yahoo2.company,
    avatarUrl: yahooLogo,
    mediaUrl: summaryDashboardImg,
    startDate: Yahoo2.startDate,
    endDate: Yahoo2.endDate,
    description:
        "Previously, the data pipeline reporting UI for Yahoo's advertising platform could only view the current state of a single data pipeline. If a pipeline broke, the developers would have to manually sift through pipeline history by exhaustive SQL queries. Developed a visualization of data pipeline history to speed up data pipeline debugging.",
    responsibilities: ['Existing dashboard was modified via editing pure HTML, CSS and jQuery'],
    skills: ['HTML', 'CSS', 'JavaScript (ES5)', 'jQuery', 'moment.js'],
};

const CloseOfBooksDashboard: Project = {
    name: 'Close-Of-Books Dashboard',
    organization: Yahoo2.company,
    avatarUrl: yahooLogo,
    mediaUrl: cobDashboardImg,
    startDate: Yahoo2.startDate,
    endDate: Yahoo2.endDate,
    description:
        "Created an extension to the monitoring UI for Yahoo's advertising platform: a dashboard to monitor the progress of data-aggregation jobs of advertisement revenue across all known time zones. Yahoo needs to know how much to charge its international clients. Once all jobs across all time zones are completed, a job responsible for close-of-books report can then be generated for internal monitoring purposes. ",
    responsibilities: [
        'Designed and implemented a front-end Close-of-Books dashboard written with HTML and jQuery',
        'Implemented a backend-API in Java using Spring MVC',
        'Retrieved data from an Oracle database with queries in PL/SQL.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript (ES5)', 'jQuery', 'moment.js', 'Spring', 'Java', 'JDBC', 'Oracle DB', 'PL/SQL'],
};

const Defiance: Project = {
    name: 'Defiance',
    organization: 'Urbana 2015',
    avatarUrl: yahooLogo,
    mediaUrl: urbanaImg,
    startDate: Yahoo2.startDate,
    endDate: Yahoo2.endDate,
    description:
        "Created an extension to the monitoring UI for Yahoo's advertising platform: a dashboard to monitor the progress of data-aggregation jobs of advertisement revenue across all known time zones. Yahoo needs to know how much to charge its international clients. Once all jobs across all time zones are completed, a job responsible for close-of-books report can then be generated for internal monitoring purposes. ",
    responsibilities: [
        'Designed and implemented a front-end Close-of-Books dashboard written with HTML and jQuery',
        'Implemented a backend-API in Java using Spring MVC',
        'Retrieved data from an Oracle database with queries in PL/SQL.',
    ],
    skills: ['C', 'Unity', 'Finale'],
};

const TestHarness: Project = {
    name: 'Mantis: QA Test Harness',
    organization: HLI.company,
    avatarUrl: yahooLogo,
    mediaUrl: mantisImg,
    startDate: HLI.startDate,
    endDate: HLI.endDate,
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
    avatarUrl: yahooLogo,
    mediaUrl: mantisImg,
    startDate: HLI.startDate,
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
    avatarUrl: amazonLogo,
    mediaUrl: withoutaboxImg,
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
};

const BeyondTheGrind: Project = {
    name: 'Beyond The Grind',
    organization: 'Beyond The Grind',
    avatarUrl: btgLogo,
    mediaUrl: btgImg,
    startDate: DateTime.fromISO('2018-06-20T00:00:00-08:00'),
    endDate: DateTime.fromISO('2018-07-20T00:00:00-08:00'),
    description:
        'Beyond The Grind is a Christian apparel shop owned and managed by Nicholas D. Spotts. Working on this project is my first foray into web design, including content, UX, and aesthetics. I also learned about integration and developing with a payment/inventory system.',
    responsibilities: [
        'Implemented an online storefront entirely on the Squarespace platform.',
        'Integrated online payments with Stripe, a payment/inventory system.',
    ],
    skills: ['Squarespace', 'Stripe'],
};

const FearlessLASite: Project = {
    name: 'Fearless LA Website 2.0',
    organization: 'Fearless LA',
    avatarUrl: fearlessLogo,
    mediaUrl: fearlessWebsiteImg,
    startDate: DateTime.fromISO('2018-04-16T00:00:00-08:00'),
    endDate: DateTime.fromISO('2019-01-01T00:00:00-08:00'),
    description:
        'Fearless LA formerly had a disorganized website that no one could use, and multiple tools across the organization that incurred a hefty technology budget expense. Through ChurchBase, I was able to design a website that separated front-end from back-end, empowering non-technical church leaders to update site content easily without direct dependence on a web designer. This content would then be propagated to a mobile app the platform provided (see below for Fearless LA Mobile). ChurchBase also provides a suite of church-friendly tools such as a giving platform for offerings and tithes as well as member portals for users to manage their own involvement with Fearless LA, reducing our dependency on other platforms and data synchronization errors. While all seemed well with the initial launch, ChurchBase’s technology stack was largely unreliable, crashing frequently, with slow turnaround on support requests. Due to unbearable technical issues with ChurchBase, the website has since been transferred to Squarespace, but redesigned with my original design and layout. Squarespace has a much cleaner design, intuitive interface, and robust platform. However, we were unable to achieve the goal of having a mobile application that connected with the same backend as Squarespace, as well as reducing dependency on other tools. ',
    responsibilities: [
        'Met with stakeholders (the church board) to discuss available options and pricing.',
        'Led a team of 5 to determine and create site content.',
        'Designed the content, layout, and interaction of pages on the website.',
        'Built all 0riginal pages on ChurchBase using their webpage design tool, using custom HTML embeds, CSS classes, and scripts written in either Javascript or PHP whenever necessary. ChurchBase’s web application stack was an implementation of WordPress on LAMP (Linux, Apache HTTP Server, MySQL Database, PHP).',
        'Redesigned all pages on the Squarespace platform after transferring the domain from ChurchBase to Squarespace.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript (ES5)', 'PHP', 'WordPress'],
};

const Projects: Project[] = [
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
    FearlessLASite,
];

export { Projects };
