import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import back from "./pictures/back.png";
import backbr from "./pictures/back-br.png";

import Carousel from './Carousel';
import more from './pictures/more.png';
import morebr from './pictures/more-br.png';

function Learn({page_path, mode}) {

    const content1 = [
        {text: 'University of Edinburgh guidelines', link: 'https://www.ed.ac.uk/information-services/help-consultancy/accessibility/creating-materials',
        steps: ["find guidelines for documents", "find guidelines for presentations", "find guidelines for materials"]    },
        { text: 'UCL accessible content guidelines', link: 'https://www.ucl.ac.uk/isd/services/digital-accessibility-services/creating-accessible-content',
        steps: ["read about accessibility fundamentals", "find out guidelines about accessible materials"] },
        { text: 'Accessibility dos and donts', link: 'https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/',
        steps: ["find UK governments guidelines", "access posters with most important rules"] },
        { text: 'WCAG 2 overview', link: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
        steps: ["read about WCAG foundations", "find WCAG guidelines", "read about accessibility fundamentals"] },
        { text: 'Dartmouth guidelines', link: 'https://dcal.dartmouth.edu/resources/teaching-methods/creating-accessible-materials#:~:text=Use%20headings%20to%20organize%20documents,careful%20reading%20for%20all%20students.',
        steps: ["access guidelines on creating accessible materials", "access online tools to help you"] },
        { text: 'Abilitynet factsheets', link: 'https://abilitynet.org.uk/factsheets/creating-accessible-documents-0',
        steps: ["download factsheets with guidelines", "read about the guidelines from Abilitynet", "find more resources"] }
    ];

    const content2 = [
        { text: 'Deaf Action', link: 'https://deafaction.org/',
        steps: ["find out what services Deaf Action offers", "read about Deaf awareness"] },
        { text: 'Royal National Institute of Blind', link: 'https://www.rnib.org.uk/',
        steps: ["find out what services RNIB offers", "read about sight loss", "learn how to get involved"] },
        { text: 'Disability matters', link: 'https://www.disabilitymatters.org.uk/',
        steps: ["access e-learning materials on disability"] },
        { text: 'Disabled access in Edinburgh', link: 'https://edinburgh.org/planning/getting-around/disabled-access/',
        steps: ["find guidelines on how to get around Edinburgh if you have a disability", "read about accessible public transport"] },
        { text: 'Disability Information Scotland', link: 'https://www.disabilityscot.org.uk/',
        steps: ["access forms for requesting accommodations", "read about disability legislation","find out what is available to you"] },
    ];

    return (
        <div>
            <div className='head-learn'>
                <Link to={`/${page_path}`} className='back'>
                    <img src={mode==='b'?backbr:back} alt="back"/>
                </Link>
                <img src={mode==='b'?morebr:more} className='icon-top'/>
                <h3 className='name'>Resources for further learning about accessibility</h3>
            </div>
            <h2 className='carousel-title'>Accessible content creation guidelines</h2>
            <div className="carousel"><Carousel content={content1}/></div>
            <h2 className='carousel-title'>Disability awareness</h2>
            <div className="carousel"><Carousel content={content2}/></div>
        </div>
    )
}
export default Learn;