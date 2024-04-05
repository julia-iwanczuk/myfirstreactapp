import React, {useState} from "react";
import "./App.css";
import { Link } from "react-router-dom";

import back from "./pictures/back.png";
import message from './pictures/message.png';
import backbr from "./pictures/back-br.png";
import messagebr from './pictures/message-br.png';
import CarouselPrompt from "./CarouselPrompt";
import MessageGPT from "./MessageGpt";

function Message({mode}) {


    const content1 = [
        { text: 'Problem with accessing materials.', prompt:"Write an email to a lecturer called NAME, to inform them I cannot access MATERIAL_NAME."},
        { text: 'I find the materials not accessible.', prompt: "Write an email to a lecturer called NAME, to inform them that the materials called MATERIAL_NAME are not accessible to me, because REASON." },
        { text: 'I need a meeting with a member of staff.', prompt: "Write an email to a lecturer called NAME, to ask them to arrange an in-person/online meeting about REASON." },
        { text: 'I need clarification.', prompt:"Write an email to a lecturer called NAME, to ask for clarification about TOPIC mentioned in MATERIAL_NAME."}
    ];

    const content2 = [
        { text: 'I need a meeting', prompt:"Write an email to a my advisor called NAME, to ask them to arrange an in-person/online meeting about REASON."},
        { text: 'I want to drop a course', prompt: "Write an email to a my advisor called NAME, to ask them to remove me from a course called COURSE because REASON." },
        { text: 'I want to change a course', prompt: "Write an email to a my advisor called NAME, to ask them to remove me from a course called COURSE because REASON, and add me to a course called COURSE. " },
        { text: 'I need support.', prompt:"Write an email to a my advisor called NAME, to ask them what I should do when SITUATION."}
    ];
    const content3 = [
        { text: 'My resources are not accessible', prompt:"Write an email to University Disability and Learning Service about my problem with resources for course called COURSE because REASON. "},
        { text: 'The lecturer did not wear a microphone', prompt: "Write an email to University Disability and Learning Service to report that lecturer called NAME from the course called COURSE did not wear a microphone on the DATE." },
        { text: 'I cannot access a builiding/space.', prompt: "Write an email to University Disability and Learning Service about not being able to get to SPACE_NAME because of REASON on DATE." },
        { text: 'I need support with filling a form.', prompt:"Write an email to University Disability and Learning Service about a problem I have with filling in a form called FORM. My problem is PROBLEM."}
    ];
    const [showOverlay, setShowOverlay] = useState(false);
    const [promptText, setPromptText] = useState("");

    const toggleOverlay = (prompt) => {
        setShowOverlay(!showOverlay);
        setPromptText(prompt);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <>
            <div className='head-support'>
                <Link to='/student' className='back'>
                    <img src={mode==='b'?backbr:back} alt="back"/>
                </Link>
                <img src={mode==='b'?messagebr:message} className='icon-top'/>
                <h3 className='name'>Generating contents of a message to a member of staff.</h3>
            </div>
            <div>
                <h2 className="message-description" >Choose one of the prompts that are of interest to you.
                Then, you will be able to add more details to the prompt.
                    You will also be able to add examples of your writing style to personalise your message.</h2>
                <h3 className="message-description" id="accent">These messages will be generated automatically with the use
                    of generative AI tool ChatGPT 3.5. The messages may have errors and should be checked before
                    using them in real-life communication.</h3>
            </div>
            <div>
                <h2 className='carousel-title'>Message to a course organiser/lecturer/tutor</h2>
                <div className="carousel"><CarouselPrompt content={content1} toggleOverlay={toggleOverlay} /></div>
                <h2 className='carousel-title'>Message to a student adviser</h2>
                <div className="carousel"><CarouselPrompt content={content2} toggleOverlay={toggleOverlay} /></div>
                <h2 className='carousel-title'>Message to University Disability and Learning Service</h2>
                <div className="carousel"><CarouselPrompt content={content3} toggleOverlay={toggleOverlay} /></div>
            </div>
            {showOverlay && <MessageGPT toggleOverlay={toggleOverlay} promptText={promptText} />}
        </>
    );
}
export default Message;