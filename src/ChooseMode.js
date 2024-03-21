import './App.css';
import studentPic from './pictures/student.png';
import staffPic from './pictures/staff.png';
import studentPicbr from './pictures/student-br.png';
import staffPicbr from './pictures/staff-br.png';
import { Link } from 'react-router-dom';

function Choose({mode}) {
  return (
    <>
      <div className='choose'> 
        <h2 className='iam'>I am a...</h2>

        <Link to="/student" className='option' id='accent'>
          <img src={mode==="b" ? studentPicbr : studentPic} alt="student mode" />
          <h1 id="main-color">student</h1>
        </Link>

        <Link to="/teach" className='option' id='accent'>
            <img src={mode==='b'?staffPicbr:staffPic} alt="staff mode" />
            <h1 id="main-color">teacher/member of staff</h1>
        </Link>

      </div>
      </> 
  )
}

export default Choose;
