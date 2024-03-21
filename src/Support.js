import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import back from "./pictures/back.png";
import backbr from "./pictures/back-br.png";
import Carousel from './Carousel';
import support from './pictures/support.png';
import supportbr from './pictures/support-br.png';


function Support({ page_path, mode }) {

    const content1 = [
        { text: 'Staff Disability Advice Service', link: 'https://www.ed.ac.uk/health-safety/staff-disability-advice-service/accessing-the-staff-disability-advice-service',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."]},
        { text: 'Training for Staff', link: 'https://www.ed.ac.uk/student-disability-service/staff/training-for-staff',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."]},
        { text: 'Creating Accessible Materials', link: 'https://www.ed.ac.uk/information-services/help-consultancy/accessibility/creating-materials',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."] },
        { text: 'School Disability Contacts', link: 'https://www.ed.ac.uk/student-disability-service/staff/schedules-of-adjustments-and-student-support-in-sc/school-disability-contacts',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."] },
        { text: 'Student support - key guidance', link: 'https://www.ed.ac.uk/student-disability-service/staff/schedules-of-adjustments-and-student-support-in-sc/supporting-students-key-information-for-staff',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."] },
        { text: 'Supporting students - more details', link: 'https://www.ed.ac.uk/student-disability-service/staff/supporting-students',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."] }
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
            <div className='head-support'>
                <Link to={`/${page_path}`} className='back'>
                    <img src={mode==='b'? backbr :back} alt="back"/>
                </Link>
                <img src={mode==='b'?supportbr:support} className='icon-top'/>
                <h3 className='name' id='accent'>Support offered at The University of Edinburgh.</h3>
            </div>
            <h2 className='carousel-title'>University Disability and Learning Service</h2>
            <div className="carousel"><Carousel content={content1}/></div>
            <h2 className='carousel-title'>University Counselling Service </h2>
            <div className="carousel"><Carousel content={content2}/></div>
        </div>
    )
}
export default Support;