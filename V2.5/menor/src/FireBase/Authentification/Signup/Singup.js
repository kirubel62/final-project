//
import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/Landing");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div className="signincontainer">
      <div className="signincontainer_c1">
        <form onSubmit={signUp} className="signincontainer_c2">
          <h1>Create Account</h1>
          <input
            className="ip"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <input
            className="ip"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <button className="btn1" type="submit">
            Sign Up
          </button>
          <p children="p1">
            Already have an account yet?<Link to="/Login">Signin</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
