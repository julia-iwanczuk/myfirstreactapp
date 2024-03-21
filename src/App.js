import './App.css';
import Teach from './Teach.js';
import Student from './Student.js';
import Choose from './ChooseMode.js';
import Support from './Support.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar.js';
import Learn from './Learn.js';
import CheckMaterials from './CheckMaterials.js';
import GuideText from './GuideText.js';
import GuideSlides from './GuideSlides.js';
import GuideVideo from './GuideVideo.js';
import GuideAudio from './GuideAudio.js';
import GuidePic from './GuidePic.js';
import Message from './Message.js';


function App({mode,add, low, addLS, lowLS, addLH, lowLH, chFont, colorScheme }) {

    return (

            <Router>
            <Navbar mode={mode} add={add} low={low} addLS={addLS} lowLS={lowLS} addLH={addLH} lowLH={lowLH} chFont={chFont} colorScheme={colorScheme} />
                <Routes>
                    <Route path="/" element={<Choose mode={mode} />} exact/>
                    <Route path="/teach" element={<Teach mode={mode} />} />
                    <Route path="/support-teach" element={<Support page_path={"./teach"} mode={mode}/>} />   
                    <Route path="/support-student" element={<Support page_path={"./student"} mode={mode}/>} />   
                    <Route path="/learn-teach" element={<Learn page_path={"./teach"} mode={mode} />} />
                    <Route path="/learn-student" element={<Learn page_path={"./student"} mode={mode}/>} />
                    <Route path="/checkmat" element={<CheckMaterials mode={mode}/>} />
                    <Route path="/student" element={<Student mode={mode}/>} />
                    <Route path="/guidetext" element={<GuideText mode={mode}/>} />
                    <Route path="/guideslides" element={<GuideSlides mode={mode}/>} />
                    <Route path="/guidevideo" element={<GuideVideo mode={mode}/>} />
                    <Route path="/guideaudio" element={<GuideAudio mode={mode}/>} />
                    <Route path="/guidepic" element={<GuidePic mode={mode} />} />
                    <Route path="/message" element={<Message mode={mode}/>}/>
                </Routes>
            </Router>

    );
}

export default App;
