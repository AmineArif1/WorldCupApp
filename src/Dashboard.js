import hero from "./imgs/hero.svg";
import hero2 from "./imgs/hero2.jpg";
import "./dashboardStyle.css";
import Loop from "./Loop.js";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import MatchRow from "./MatchRow.js";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import factsImage from "./imgs/facts.PNG";
import { useNavigate } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import SpringIn from "./SpringIn";

function Dashboard(props) {
  let [weatherDubai, setWeatherDubai] = useState(null);
  let [weatherCasa, setWeatherCasa] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [weatherImage, setWeatherImage] = useState(null);
  let [weatherImageCasa, setWeatherImageCasa] = useState(null);
  let [weatherLondon, setWeatherLondon] = useState(null);
  let [weatherParis, setWeatherParis] = useState(null);
  let [weatherImageLondon, setWeatherImageLondon] = useState(null);
  let [weatherImageParis, setWeatherImageParis] = useState(null);
  let [matches, setMatches] = useState([]);
  let [topLayer, setTopLayer] = useState();
  let [fact, setFact] = useState(null);
  let [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const images = [
    { url: hero, alt: "hero" },
    { url: hero2, alt: "hero" },
  ];
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setTopLayer(true);
          setSearch(null);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const loopRef = useRef(null);
  useOutsideAlerter(loopRef);

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=c943211fe5144993947183757221612&q=Doha&aqi=no"
      )
      .then((response) => {
        setWeatherDubai(response.data.current.temp_c);
        setLoading(true);
        setWeatherImage(response.data.current.condition.icon);
      })
      .catch((error) => {
        setError(error);
        setLoading(true);
      });
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=c943211fe5144993947183757221612&q=Casablanca&aqi=no"
      )
      .then((response) => {
        setWeatherCasa(response.data.current.temp_c);
        setLoading(true);
        setWeatherImageCasa(response.data.current.condition.icon);
      })
      .catch((error) => {
        setError(error);
        setLoading(true);
      });
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=c943211fe5144993947183757221612&q=London&aqi=no"
      )
      .then((response) => {
        setWeatherLondon(response.data.current.temp_c);
        setLoading(true);
        setWeatherImageLondon(response.data.current.condition.icon);
      })
      .catch((error) => {
        setError(error);
        setLoading(true);
      });
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=c943211fe5144993947183757221612&q=Paris&aqi=no"
      )
      .then((response) => {
        setWeatherParis(response.data.current.temp_c);
        setLoading(true);
        setWeatherImageParis(response.data.current.condition.icon);
      })
      .catch((error) => {
        setError(error);
        setLoading(true);
      });
    axios({
      method: "GET",
      url: "https://workers.elarifamine1.workers.dev/",
      header: {},
    }).then((response) => {
      console.log(response.data);
      setMatches(response.data);
    });
  }, []);
  let key = 0;
  let match = matches.map((match) => {
    if (
      match.awayTeam.name == "England" ||
      match.homeTeam.name == "England" ||
      match.homeTeam.name == "Wales" ||
      match.awayTeam.name == "Wales" ||
      match.homeTeam.name == "Tunisia" ||
      match.awayTeam.name == "Tunisia" ||
      match.homeTeam.name == "Saudi Arabia" ||
      match.awayTeam.name == "Saudi Arabia" ||
      match.homeTeam.name == "Poland" ||
      match.awayTeam.name == "Poland" ||
      match.homeTeam.name == "Korea Republic" ||
      match.awayTeam.name == "Korea Republic" ||
      match.homeTeam.name == "Switzerland" ||
      match.awayTeam.name == "Switzerland" ||
      match.homeTeam.name == "Portugal" ||
      match.awayTeam.name == "Portugal"
    ) {
      return;
    }
    console.log(search === null);
    if (
      search != null &&
      match.awayTeam.name != search &&
      match.homeTeam.name != search
    ) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAA");
      return;
    }
    key = key + 1;

    return (
      <MatchRow
        awayT={match.awayTeam.name}
        homeT={match.homeTeam.name}
        score={match.homeTeam.goals + " - " + match.awayTeam.goals}
        pair={key}
        time={match.date.split("T")[0]}
        flag1={`https://flagcdn.com/48x36/${match.awayTeam.country
          .toLowerCase()
          .substring(0, 2)}.png`}
        flag2={`https://flagcdn.com/48x36/${match.homeTeam.country
          .toLowerCase()
          .substring(0, 2)}.png`}
      />
    );
  });

  return (
    <>
      <div className="dashboard">
        <SpringIn>
          <Loop
            setSearch={setSearch}
            reference={loopRef}
            topLayer={setTopLayer}
            sideBar={props.sideBar}
            setSideBar={props.setSideBar}
          />
        </SpringIn>

        <div className="flexHero">
          {topLayer && (
            <SpringIn>
              <div className="hero">
                <SimpleImageSlider
                  width={758}
                  height={380}
                  images={images}
                  showBullets={false}
                  showNavs={true}
                  slideDuration={0.5}
                  loop={true}
                  autoPlay={true}
                />
              </div>
            </SpringIn>
          )}
          {/* <img className="hero" src={hero}></img> */}
          {topLayer && (
            <>
              <div className={!props.sideBar ? "weather" : "weatherold"}>
                <SpringIn>
                  <div className="countryWeather">
                    <img className="imageSun" src={weatherImage} alt="" />
                    <p>{weatherDubai} C</p>
                    <p>In Dubai</p>
                  </div>
                  <div className="countryWeather">
                    <img className="imageSun" src={weatherImageCasa} alt="" />
                    <p>{weatherCasa} C</p>
                    <p>In Casablanca</p>
                  </div>
                  <div className="countryWeather">
                    <img className="imageSun" src={weatherImageParis} alt="" />
                    <p>{weatherParis} C</p>
                    <p>In Paris</p>
                  </div>
                  <div className="countryWeather">
                    <img className="imageSun" src={weatherImageLondon} alt="" />
                    <p>{weatherLondon} C</p>
                    <p>In London</p>
                  </div>
                </SpringIn>
              </div>
            </>
          )}
          {topLayer && (
            <>
              <SpringIn>
                <div
                  className={!props.sideBar ? "wrapper" : "dead"}
                  onMouseEnter={() => {
                    axios
                      .get("https://worldcupfunfact.elarifamine1.workers.dev")
                      .then((response) => {
                        console.log(response.data);
                        setFact(response.data);
                        document.querySelector(".back-face > span").innerHTML =
                          response.data;
                      });
                  }}
                >
                  <div class="card front-face">
                    <h1>Hover over me for a world cup fun fact!</h1>
                    <img src={factsImage}></img>
                  </div>

                  <div class="card back-face">
                    <span></span>
                    <button
                      onClick={() => {
                        console.log(fact);
                        navigate(`/Translate/${fact}`);
                      }}
                    >
                      Translate this fact to arabic!
                    </button>
                  </div>
                </div>
              </SpringIn>
            </>
          )}
        </div>

        <SpringIn>
          <div className="matches">
            <h2>FootBall Matches</h2>
            {match}
          </div>
        </SpringIn>
      </div>
    </>
  );
}

export default Dashboard;
