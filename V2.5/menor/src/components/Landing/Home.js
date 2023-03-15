import React from "react";
import "./Home.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Parallax } from "react-parallax";
import pica from "./image/imga.jpg";
import pich from "./image/imgh.jpg";
import picf from "./image/imgf.jpg";
import picd from "./image/imgd.jpg";
import picg from "./image/imgg.jpg";

import { useEffect, useState } from "react";
import FilmList from "./FilmList";
import SearchBox from "./SearchBox";
import Feauter from "../Feauter";

function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  //for api
  const [films, setfilms] = useState([
    //inital
    {
      year: 2022,
      coo_id: "-",
      coo_name: "-",
      coo: "-",
      coo_iso: "-",
      coa_id: "-",
      coa_name: "-",
      coa: "-",
      coa_iso: "-",
      total: 53165720,
    },
    //
  ]);

  //making the search dynamic with state obj
  //const [searchFilm, setSearchFilm] = useState("");
  const [searchFilm, setSearchFilm] = useState("2022"); //with inital search key

  const getFilmRequest = async (searchFilm) => {
    //to make request for the api
    //const url = ` http://www.omdbapi.com/?s=${searchFilm}&apikey=1e010137`;

    //const url = `  http://www.omdbapi.com/?s=${searchFilm}&apikey=1e010137`;
    const url = `https://api.unhcr.org/population/v1/idmc/?page=&limit=&yearFrom=&yearTo=&year=${searchFilm}&download=&coo=&coa=&coo_all=&coa_all=&cf_type=`;

    const response = await fetch(url);

    //convert response to json
    const responseJson = await response.json();

    const responseJsonv2 = responseJson.items[0];
    const responseJsonv3 = responseJson.items[0];

    //to test
    //console.log(responseJsonv3);
    //console.log(responseJson.items);
    //console.log(responseJsonv2);
    //setfilms(responseJsonv3);

    if (responseJsonv3) {
      //to replace
      //console.log(responseJson);
      //setfilms(responseJsonv2.Search);
      setfilms(responseJsonv3);
      console.log(responseJsonv3);
    }
  };

  //call the getFilmRequest with use Effect
  // use effect use to call functions at start time
  useEffect(() => {
    //getFilmRequest(searchFilm);
    getFilmRequest(searchFilm);
  }, [searchFilm]);

  //

  return (
    <>


      <div className="Home">
        <Parallax strength={1} bgImage={picd}>
          <div className="content">
            <div className="sub-content">
              <h1>Ethiopian displaced people</h1>
              <p>
                The ICRC's long-standing work addressing internal displacement
                globally is guided by our mandate to protect the lives and
                dignity of people affected by armed conflict and other violence.
                We focus on helping internally displaced people meet their
                specific needs, in addition to addressing the negative
                consequences of their displacement on host communities and
                supporting those who are at risk of displacement.
              </p>
              <button
                className="btn1"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://www.internal-displacement.org/countries/ethiopia#:~:text=Disasters%2C%20mostly%20floods%20and%20drought,%2C%20Oromia%2C%20Somali%20and%20SNNP."
                  )
                }
              >
                Read More
              </button>
            </div>
          </div>
        </Parallax>

        <Parallax strength={100} bgImage={picg}>
          <div className="content">
            <div className="sub_bc">
              <div>
                <pre>
                  “It is the obligation of every person born in a safer room to
                  open the door when someone in danger knocks.” <br></br>— Dina
                  Nayeri
                </pre>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax strength={-100} blur={{ min: -5, max: 10 }} bgImage={pich}>
          <div className="content">
            <div className="sub-content">
              <div>
                <h1>Internal Displacement Monitoring Centre (IDMC)</h1>
                <SearchBox
                  searchFilm={searchFilm}
                  setSearchFilm={setSearchFilm}
                />
              </div>

              <div>
                <FilmList films={films} />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Home;
