import React, { useContext } from "react";
import {  Button } from "react-bootstrap";
import { FaTools, FaBuilding } from "react-icons/fa";


import UserContext from "../auth/UserContext";
import LoadingSpinner from "../common/LoadingSpinner";
import "./Homepage.css";

//Shows welcome message or login/register buttons.//

function Homepage() {
  const { currentUser } = useContext(UserContext);

  

  return (
      
        <div className='HomePage'>
          <div className="HomePage-Container">
            <div className= 'HomePage-heading'>
          <h1>Get Hired as soon as possible.</h1>
          </div>

          <div className='HomePage-greeting'>

          {currentUser ?
          <> 
          
  <>
          <div className='HomePage-form-box'>

          <label html>Username</label>
          <input disabled placeholder={`Welcome back   ${currentUser.username}`}/>
          

          <label>First Name</label>
          <input placeholder={currentUser.firstName} disabled></input>
<Button size="lg" className="HomePage-Button" href='/companies' variant="danger">{<FaBuilding/>} COMPANIES</Button>
<Button href='/jobs' size="lg" variant='warning'>{<FaTools/>} JOBS</Button>
</div>
          </>
          
          </>
        : 
        <>

        <div className='HomePage-form-box'>
          <label html>Username</label>
          <input placeholder="Username" disabled></input>
          

          <label>Password</label>
          <input placeholder="Password" disabled></input>

          <div className="HomePage-welcome-buttons">
          <Button className="HomePage-Button"  size='lg' href='/login' variant='success'>LOGIN</Button>
          <Button  size='lg' href='/signup' variant='dark'>SIGN UP</Button>
          </div>

        </div>
        
        </>
        }

          </div>

          </div>
        </div>

  );
}

export default Homepage;
