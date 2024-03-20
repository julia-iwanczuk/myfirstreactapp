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

function App({add, low, addLS, lowLS, addLH, lowLH, chFont, colorScheme }) {

    return (
        <Router>
            <Navbar add={add} low={low} addLS={addLS} lowLS={lowLS} addLH={addLH} lowLH={lowLH} chFont={chFont} colorScheme={colorScheme} />
            <Routes>
                <Route path="/" element={<Choose/>} exact/>
                <Route path="/teach" element={<Teach />} />
                <Route path="/support-teach" element={<Support page_path={"./teach"}/>} />   
                <Route path="/support-student" element={<Support page_path={"./student"}/>} />   
                <Route path="/learn" element={<Learn />} />
                <Route path="/checkmat" element={<CheckMaterials />} />
                <Route path="/student" element={<Student />} />
                <Route path="/guidetext" element={<GuideText />} />
                <Route path="/guideslides" element={<GuideSlides />} />
                <Route path="/guidevideo" element={<GuideVideo />} />
                <Route path="/guideaudio" element={<GuideAudio />} />
                <Route path="/guidepic" element={<GuidePic />} />
                <Route path="/message" element={<Message />}/>
            </Routes>
        </Router>
    );
}

export default App;
