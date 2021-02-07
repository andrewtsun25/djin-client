import { Container, Link, Typography } from '@material-ui/core';
import useResearches from 'hooks/useResearches';
import React from 'react';
import { Research } from 'types/research';

import HBVResearchCard from './HBVResearchCard';
import hbvResearchPageStyles from './HBVResearchPage.styles';

const HEP_B_LINK = 'http://med.stanford.edu/liver/education/whatishepb.html';

const HBVResearchPage: React.FC = () => {
    const classes = hbvResearchPageStyles();
    const researches: Research[] = useResearches();
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" align="center" className={classes.pageTitle}>
                Hepatitis B Research
            </Typography>
            <Typography paragraph className={classes.italicizedParagraph}>
                The Hepatitis B Virus (HBV) is a chronic liver disease that, once manifested, is untreatable, leading to
                liver cirrhosis, liver failure, or liver cancer. HBV is a silent killer; patients are largely
                asymptomatic, and when symptoms do manifest, it is often too late for treatment to be effective.
                Fortunately, HBV is not as easily transmissible like COVID-19, being passed only through birth (mother
                to child), blood (direct contact with infected blood), or unprotected sex with someone with HBV.
                Hepatitis B is also preventable; there exists a vaccine that can effectively prevent the onset of
                Hepatitis B. Despite these advantages, there exists 257 million people infected with HBV. Compared to
                AIDS, where there are estimated to be 38 million people infected, there are about 7x more people with
                HBV. Yet, there is so much more media coverage and efforts directed towards fighting AIDS, while there
                is almost none than preventing HBV. In the United States of America, 1 in 12 Asians are infected with
                HBV as opposed to 1 in 1000 non-Hispanic Caucasians, and Asian Americans comprise more than half of the
                1.2 - 2 million individuals infected with HBV. HBV is one of the greatest racial health disparities in
                the US.
            </Typography>
            <Typography paragraph className={classes.italicizedParagraph}>
                You can learn more about Hepatitis B and how Asian Americans are disproportionately affected{' '}
                <Link href={HEP_B_LINK} target="_blank" rel="noopener noreferrer">
                    here
                </Link>
                .
            </Typography>
            <Typography paragraph className={classes.contentParagraph}>
                In middle school, my maternal grandmother passed away from Hepatitis B. Through that experience, I took
                a youth leadership course at the Stanford Asian Liver Center, an organization that raises awareness
                about the deadliness of HBV and the disproportionate amount of individuals affected by HBV not only in
                the world, but also Asians affected by HBV in the US. Inspired by the opportunity to save others from
                the horrible suffering my grandmother went through simply by advocating for screening and vaccination, I
                joined Team HBV, the high school and collegiate outreach arm of the Stanford Asian Liver Center. While I
                was unable to start a chapter at my own high school, I often volunteered on my own, meeting members from
                other chapters of Team HBV. When I attended college at UCSD, I was presented with the opportunity to
                help lead the Team HBV chapter there, and decided to partner with the Asian Pacific Health Foundation, a
                local health organization that provided Hepatitis B screenings and vaccinations to Asian populations
                across San Diego. Working alongside the Asian Pacific Health Foundation provided me with unique
                opportunities to perform undergraduate research with them.
            </Typography>
            {researches.map((research, index) => (
                <HBVResearchCard research={research} key={index} />
            ))}
        </Container>
    );
};

export default HBVResearchPage;