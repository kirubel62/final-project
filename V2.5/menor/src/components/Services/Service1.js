import React from "react";
import "./Service1.css";
//
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/Firebase";

const Service1 = () => {
  const handleform = async (e) => {
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="c1">
      <form onSubmit={handleform} className="form">
        <h1>Personal Information</h1>

        <div className="form-cd">
          <label>Full name:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Date of birth:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Nationality:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Home address before displacement:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Current address (if different from above):</label>
          <input></input>
        </div>

        <h1>Contact Information</h1>

        <div className="form-cd">
          <label>Phone number::</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Email:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Emergency contact name and relationship:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Emergency contact phone number:</label>
          <input></input>
        </div>

        <h1> Family Information </h1>

        <div className="form-cd">
          <label>Number of family members:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Names and ages of family members:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Relationship to the head of the household:</label>
          <input></input>
        </div>

        <h1>Displacement Information</h1>

        <div className="form-cd">
          <label>Date of displacement:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Reason for displacement:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Place of origin:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Current location:</label>
          <input></input>
        </div>

        <h1>Needs Assessment</h1>

        <div className="form-cd">
          <label>Food and water:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Shelter:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Healthcare:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Education:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Legal aid:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Psychosocial support:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Livelihood support:</label>
          <input></input>
        </div>

        <h1>Additional Information</h1>

        <div className="form-cd">
          <label>Any medical conditions or disabilities:</label>
          <input></input>
        </div>

        <div className="form-cd">
          <label>Any specific needs or concerns:</label>
          <input></input>
        </div>

        <h1>#################################</h1>
        <p>
          By signing below, I certify that the information provided is accurate
          and true to the best of my knowledge.
        </p>
        <label>Signature:</label>
        <bre></bre>
        <label>Date:</label>
        <pre>
          Note: This form can be modified based on the specific needs and
          circumstances of the displaced population being registered. It's
          important to ensure that the form is designed in a way that is
          culturally appropriate and accessible to all individuals.
          Additionally, appropriate measures should be taken to ensure the
          privacy and confidentiality of the information provided.
        </pre>
        <h1>#################################</h1>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Service1;
