import './App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import back from "./pictures/back.png";
import backbr from "./pictures/back-br.png";
import Carousel from './Carousel';
import support from './pictures/support.png';
import supportbr from './pictures/support-br.png';


function Support({ page_path, mode }) {

    //staff
    const content1 = [
        { text: 'Staff Disability Advice Service', link: 'https://www.ed.ac.uk/health-safety/staff-disability-advice-service/accessing-the-staff-disability-advice-service',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."]},
        { text: 'Training for Staff', link: 'https://www.ed.ac.uk/student-disability-service/staff/training-for-staff',
        steps: ["access disability training for staff."]},
        { text: 'Creating Accessible Materials', link: 'https://www.ed.ac.uk/information-services/help-consultancy/accessibility/creating-materials',
        steps: ["find guidelines on creating accessible materials", "find online tools helping you with material adjustment"] },
        { text: 'School Disability Contacts', link: 'https://www.ed.ac.uk/student-disability-service/staff/schedules-of-adjustments-and-student-support-in-sc/school-disability-contacts',
        steps: ["find contacts for disability services", "find people responsible for accessibility in each school"] },
        { text: 'Student support - key guidance', link: 'https://www.ed.ac.uk/student-disability-service/staff/schedules-of-adjustments-and-student-support-in-sc/supporting-students-key-information-for-staff',
        steps: ["find out what types of support an be offered to students", "read example case studies"] },
        { text: 'Supporting students - more details', link: 'https://www.ed.ac.uk/student-disability-service/staff/supporting-students',
        steps: ["find out how you can support your students", "read examination support guidelines","access resources you cans hare with your students"] }
    ];
    const content2 = [
        { text: 'Staff Counselling Service', link: 'https://staff-counselling.ed.ac.uk/',
        steps: ["access a self-referral form for staff.", "find workplace adjustment form and guidance."] },
        { text: 'Online Training for Staff', link: 'https://student-counselling.ed.ac.uk/supporting-students/online-training-resource-for-staff',
        steps: ["access key counselling training for staff"] },
        { text: 'Supporting your students', link: 'https://student-counselling.ed.ac.uk/supporting-students/staff',
        steps: ["find out what options your students have regarding counselling", "find guidelines on what you can do to support students"] },
        { text: 'Crisis Support', link: 'https://student-counselling.ed.ac.uk/other-services-external-organisations/crisis-support',
        steps: ["find emergency contact numbers","find advice on what to do in time of a crisis"] },
        { text: 'Special circumstances guidelines ', link: 'https://www.ed.ac.uk/student-administration/extensions-special-circumstances/staff',
        steps: ["read about what special circumstances are", "find out how you can support students with special circumstances"] },
    ];
    //students
    const content3 = [
        { text: 'Register with the service', link: 'https://www.hub.ed.ac.uk/form.aspx?id=981175',
        steps: ["provide your personal details", "describe your education", "describe your condition","add supporting documentation","add preferred contacts","add more comments"]},
        { text: 'Request an appointment', link: 'https://www.hub.ed.ac.uk/form.aspx?id=981585',
        steps: ["enter your personal details", "describe the reason you need an appointment"]},
        { text: 'Submit a query', link: 'https://www.hub.ed.ac.uk/form.aspx?id=981585',
        steps: ["provide your personal details", "describe your query"] },
        { text: 'Feedback and complaints', link: 'https://www.ed.ac.uk/student-disability-service/about/feedback',
        steps: ["submit your feedback about the service", "submit a complaint", "learn about the complaint process"] },
        { text: 'Emergency contacts', link: 'https://www.ed.ac.uk/student-disability-service/emergency-contacts/emergency-student',
        steps: ["find emergency contact numbers"] },
        { text: 'Disabled student funding', link: 'https://www.ed.ac.uk/student-disability-service/students/disabled-student-funding',
        steps: ["learn about what funding you can apply for", "find contact to get more details about the funding"] }
    ];

    const content4 = [
        { text: 'Service information', link: 'https://student-counselling.ed.ac.uk/about',
        steps: ["reach homepage of the counselling service", "find out what's available to you"]},
        { text: 'One-to-one counselling', link: 'https://student-counselling.ed.ac.uk/services/one-to-one-therapy',
        steps: ["find what counselling options you have", "book a one-to-one counselling session"]},
        { text: 'Same day appointments', link: 'https://student-counselling.ed.ac.uk/services/same-day-appointments',
        steps: ["learn more about same day appointments", "book a same day appointment","find out what you support you can get on such appointment"] },
        { text: 'Self help', link: 'https://student-counselling.ed.ac.uk/self-help',
        steps: ["find resources you use at home", "find advice on self-help"] },
        { text: 'Crisis support', link: 'https://student-counselling.ed.ac.uk/other-services-external-organisations/crisis-support',
        steps: ["find emergency contact numbers","find advice on what to do in time of a crisis"] },
        { text: 'Service information', link: 'https://student-counselling.ed.ac.uk/about',
        steps: ["reach homepage of the counselling service", "find out what's available to you"]}
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
            <div className="carousel"><Carousel content={page_path==="./teach" ? content1 : content3}/></div>
            <h2 className='carousel-title'>University Counselling Service </h2>
            <div className="carousel"><Carousel content={page_path==="./teach" ? content2 : content4}/></div>
        </div>
    )
}
export default Support;