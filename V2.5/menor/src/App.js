import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Landing from "./components/Landing/Landing";
import Home from "./components/Landing/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Donation from "./components/Donation/Donation";
import Blog from "./components/Blog/Blog";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./FireBase/Authentification/Login/Login";
import Signup from "./FireBase/Authentification/Signup/Singup";
import Service1 from "./components/Services/Service1";
import Volunter from "./components/Volunter/Volunter";
import VolunterRegistarationForm from "./components/Volunter/VolunterRegistrationForm";

import { useState, useEffect } from "react";
//different loaders
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const override: CSSProperties = {
    display: "flex",
    margin: "15% auto",
    borderColor: "red",
    bgColor: "black",
  };

  return (
    <div className="App">
      {loading ? (
        <BounceLoader
          color={"#F37A24"}
          loading={loading}
          size={300}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          {/* <BrowserRouter> */}
          <>
            {/* <div className="_navbar">
                <Navbar />
              </div> */}

            <div className="_body">
              <Routes>
                {/* <Route exact path="/" element={<Index />} /> */}
                <Route path="/About" element={<About />} />
                <Route path="/Donation" element={<Donation />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Volunter" element={<Volunter />} />
                <Route
                  path="/VolunterRegistarationForm"
                  element={<VolunterRegistarationForm />}
                />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route exact path="/" element={<Signup />} />
                <Route exact path="/Landing" element={<Landing />} />
                {/* <Route exact path="/Index" element={<Home />} /> */}
                {/* Services */}
                <Route exact path="/Service1" element={<Service1 />}></Route>
              </Routes>
            </div>
          </>
          {/* </BrowserRouter> */}

          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
