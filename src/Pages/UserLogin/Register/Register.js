import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useFirebase from "../../../Hooks/useFirebase";

import "./Register.css";

const Register = () => {
  const [userRegister, setUserRegister] = useState({});
 
  // isLoading, error
  const { user, userRegistration, isLoading, success,error } = useFirebase();
  console.log(user);

  const navigate = useNavigate();
  const location = useLocation();

  const registerInput = (e) => {
    // console.log(e.target.value);
    const name = e.target.name;
    const fieldValue = e.target.value;

    const signInUser = { ...userRegister };
    signInUser[name] = fieldValue;
    setUserRegister(signInUser);
  };

  console.log(userRegister);
  const registeration = (e) => {
    e.preventDefault();
    // console.log(userRegister);
    if (userRegister.password !== userRegister.password2) {
      // alert("password not matched");
      Swal.fire({
        title: 'Oops...',
        imageUrl: 'https://i.ibb.co/6gvrQ1r/mini-Jinni.png',
        text: 'Password not matched!',
        footer: 'Set password correctly and try again'
      })

      return;
    }
   
    userRegistration(
      userRegister.email,
      userRegister.password,
      userRegister.displayName,
      navigate,
      location
    );
    // setUserRegister({})
    setUserRegister({});
  };

  return (
    <div className="row userRegister">
      <div className="col-md-7 col-sm-12 col-12 register-section"></div>
      <div className="col-md-5  col-sm-12 col-12 regMain">
        <div className="register-input">
          <h2 className="common"><b>Please Register Now</b></h2>
          <h6 className="text-danger">{/* <b>{error}</b> */}</h6>
          {/* !isLoading && */}
          {/* ( */}
          <form onSubmit={registeration} action="">
            <input
              placeholder="Enter Your Name"
              required
              onBlur={registerInput}
              type="text"
              name="displayName"
              id=""
            />
            <br />
            <input
              placeholder="Enter Your Email"
              required
              name="email"
              type="email"
              onBlur={registerInput}
            />
            <br />
            <input
              placeholder="Type Your Password"
              required
              onBlur={registerInput}
              type="password"
              name="password"
              id=""
            />
            <br />
            <input
              placeholder="Re-Type Your Password"
              required
              onBlur={registerInput}
              type="password"
              name="password2"
              id=""
            />
            <br />

            <input className="register-submit" type="submit" value="Register" />
          </form>
          <br />
          <h6 className="text-success">{success}</h6>
          <h6 className="text-danger">{error}</h6>
         
          {/* ) */}
          {isLoading && <Spinner animation="border" variant="info" />}
          ----------------------
          <h5>Already Registerd?</h5>
          <Link className="regLink" to="/login">
            <h4>
              <b>Click Here for LOGIN</b>
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
