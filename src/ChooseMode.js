import './App.css';
import studentPic from './pictures/student.png';
import staffPic from './pictures/staff.png';
import { Link } from 'react-router-dom';

function Choose() {
  return (
    <>
    
      <div className='choose'> 
        <h2 className='iam'>I am a...</h2>

        <Link to="/student" className='option'>
          <img src={studentPic} alt="student mode" />
          <h1>student</h1>
        </Link>

        <Link to="/teach" className='option'>
            <img src={staffPic} alt="staff mode" />
            <h1>teacher/member of staff</h1>
        </Link>

      </div>
      </> 
  )
}

export default Choose;
