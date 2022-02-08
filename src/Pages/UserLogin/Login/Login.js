import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

import "./Login.css"
const Login = () => {

    const [userLoggedIn,setUserLoggedIn]=useState({})
const location = useLocation()
const navigate = useNavigate()
    const {handaleGoogleSign,error,signInUser}=useFirebase()

    //login with email and password
    const loginInput=(e)=>{
        //console.log(e.target.value)
        const name = e.target.name;
        const fieldValue= e.target.value;
    
        const signInUser ={...userLoggedIn}
        signInUser[name]=fieldValue;
        setUserLoggedIn(signInUser)
    
      }
      // //console.log(userLoggedIn)
      const userLogin=(e)=>{
    
        signInUser(userLoggedIn.email,userLoggedIn.password,navigate,location)
        
        e.preventDefault()
      }

    return (
        <div className="login-section  text-center">
        <h2 className="loginHeader">Please Login </h2>
        <h6 className="text-danger">
              <b>{error}</b>
            </h6>
        <form onSubmit={userLogin} action="">
        <input required placeholder="Enter Your Email" name="email" type="email" onBlur={loginInput} />
        <br/>
        <input required placeholder="Enter Your Password" onBlur={loginInput} type="password" name="password" id="" />
        <br/>
        <input type="submit" value="Login Now" className="login-button" />
        </form>
  <br />
        <Button onClick={() => handaleGoogleSign(location, navigate)} variant="warning">
          <b>Login with google</b>
        </Button>
  <br/>
  <br/>
  
        
        <br />
        <Link className='pleaseRegister' to="/Register"><h3 ><span className='newUsermsg'>New user? just click Here</span> </h3></Link>
      </div>
    );
};

export default Login;