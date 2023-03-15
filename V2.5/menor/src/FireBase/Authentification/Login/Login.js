import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
//
import { useEffect } from "react";

//<Link to="/Landing">Home</Link>

const Login = () => {
  //
  
  //
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //
  const navigate = useNavigate();

  //method
  const handlogin = (e) => {
    e.preventDefault(); // when the form is submited it is not gating reloded
    signInWithEmailAndPassword(auth, email, password) //this function return a promise
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;
        const uid = user.displayName;
        console.log(uid);
        navigate("/Landing");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
  };
  //

  return (
    <>
      <div className="signincontainer">
        <div className="childdiv_c1">
          <form onSubmit={handlogin} className="childdiv_c1_c1">
            <h1>Welcome Back!</h1>
            <input
              type="email"
              placeholder="Enter Your Email Hear"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></input>
            <br></br>
            <input
              type="password"
              placeholder="Enter Your Password Hear"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
            <br></br>
            <button type="submit">Login</button>
          </form>

          <p>
            Dont have an account yet?<Link to="/">Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
