import React from "react";

const VolunterRegistarationForm = () => {
  return (
    <div>
      <form className="form">
        <div>
          <p>
            Thank you for your interest in providing volunteer services for
            displaced people. Please fill out the following information to
            register as a service provider:
          </p>

          <div>
            <label className="lable">Organization/Individual Name: </label>
            <input></input>
          </div>

          <div>
            <label className="lable">Contact Person: </label>
            <input></input>
          </div>

          <div>
            <lable className="lable">Phone Number:</lable>
            <input></input>
          </div>

          <div>
            <lable className="lable">Email: </lable>
            <input></input>
          </div>

          <div>
            <lable className="lable">Address:</lable>
            <input></input>
          </div>

          <div>
            <label>City:</label>
            <input></input>
          </div>

          <div>
            <label>Country:</label>
            <input></input>
          </div>

          <div>
            <lable>Website (if applicable): </lable>
            <input></input>
          </div>

          <div>
            <lable>Service Offered:</lable>
            <input type="text"></input>
          </div>

          <div>
            <lable>
              Please provide a brief description of the service you are offering
              to displaced people:
            </lable>
            <br></br>
            <input></input>
          </div>

          <div>
            <lable>Availability:</lable>
            <lable>
              Please indicate the days and times you are available to provide
              volunteer services:
            </lable>
            <br></br>
            <label>Day(s) of the Week:</label>
            <input></input>
            <lable>Time(s) of Day: </lable>
            <input></input>
          </div>

          <div>
            <lable>
              Please list any skills or qualifications you have that may be
              relevant to providing volunteer services for displaced people:
            </lable>
            <br></br>
            <input></input>
          </div>

          <div>
            <lable>
              By signing below, I confirm that the information provided is true
              and accurate to the best of my knowledge. I understand that
              providing false information may result in the revocation of my
              registration.
            </lable>
            <br></br>
            <input type="cheackbox"></input>
            <br></br>
            <label>
              Thank you for your interest in providing volunteer services for
              displaced people. We will review your application and be in touch
              with you shortly.
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VolunterRegistarationForm;
