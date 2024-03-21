import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import back from "./pictures/back.png";
import backbr from "./pictures/back-br.png";

import Carousel from './Carousel';
import more from './pictures/more.png';
import morebr from './pictures/more-br.png';

function Learn({mode}) {

    const content1 = [
        { text: 'Staff Disability Advice Service', link: 'https://www.ed.ac.uk/health-safety/staff-disability-advice-service/accessing-the-staff-disability-advice-service' },
        { text: 'Training for Staff', link: 'https://www.ed.ac.uk/student-disability-service/staff/training-for-staff' },
        { text: 'Creating Accessible Materials', link: 'https://www.ed.ac.uk/information-services/help-consultancy/accessibility/creating-materials' },
        { text: 'School Disability Contacts', link: 'https://www.ed.ac.uk/student-disability-service/staff/schedules-of-adjustments-and-student-support-in-sc/school-disability-contacts' },
        { text: 'Student support - key guidance', link: 'https://www.ed.ac.uk/student-disability-service/staff/schedules-of-adjustments-and-student-support-in-sc/supporting-students-key-information-for-staff' },
        { text: 'Supporting students - more details', link: 'https://www.ed.ac.uk/student-disability-service/staff/supporting-students' }
    ];
    const content2 = [
        { text: 'Staff Counselling Service', link: 'https://staff-counselling.ed.ac.uk/' },
        { text: 'Online Training for Staff', link: 'https://student-counselling.ed.ac.uk/supporting-students/online-training-resource-for-staff' },
        { text: 'Supporting your students', link: 'https://student-counselling.ed.ac.uk/supporting-students/staff' },
        { text: 'Crisis Support', link: 'https://student-counselling.ed.ac.uk/other-services-external-organisations/crisis-support' },
        { text: 'Special circumstances guidelines ', link: 'https://www.ed.ac.uk/student-administration/extensions-special-circumstances/staff' },
    ];

    return (
        <div>
            <div className='head-learn'>
                <Link to='/teach' className='back'>
                    <img src={mode==='b'?backbr:back} alt="back"/>
                </Link>
                <img src={mode==='b'?morebr:more} className='icon-top'/>
                <h3 className='name'>Resources for further learning about accessibility</h3>
            </div>
            <h2 className='carousel-title'>Accessible content creation guidelines</h2>
            <div className="carousel"><Carousel content={content1}/></div>
            <h2 className='carousel-title'>Managing accessibility accommodation requests</h2>
            <div className="carousel"><Carousel content={content2}/></div>
            <h2 className='carousel-title'>Disability awareness</h2>
            <div className="carousel"><Carousel content={content2}/></div>
        </div>
    )
}
export default Learn;