import hero from "./imgs/hero.svg";
import "./dashboardStyle.css";
import Loop from "./Loop.js";
import sun from "./imgs/weather.png";
import axios from "axios";
import { useEffect, useState } from "react";
import MatchRow from "./MatchRow.js";
function Dashboard() {
  let [weatherC, setWeatherC] = useState(null);
  let [weatherF, setWeatherF] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [city, setCity] = useState("Dubai");
  let [country, setCountry] = useState("AE");
  let [weatherImage, setWeatherImage] = useState(null);
  let [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=fc943211fe5144993947183757221612&q=Doha&aqi=no"
      )
      .then((response) => {
        setWeatherC(response.data.current.temp_c);
        setLoading(true);
        setWeatherImage(response.data.current.condition.icon);
        setCity(response.data.location.name);
      })
      .catch((error) => {
        setError(error);
        setLoading(true);
      });
    axios({
      method: "get",
      url: "https://worldcupjson.net/matches/",
      header: {},
    }).then((response) => {
      console.log(response.data);
      setMatches(response.data);
    });
  }, []);
  let flagUrl1;
  let flagUrl2;
  const getFlagEmoji = (countryCode) =>
    String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt(0))
    );

  console.log(getFlagEmoji("gb")); // 🇬🇧
  getFlagEmoji("za"); // 🇿🇦
  getFlagEmoji("th"); // 🇹🇭
  let match = matches.map((match, key) => {
    axios
      .get(
        `https://countryflagsapi.com/png/${match.away_team.name}`
      )
      .then((response) => {
        flagUrl1 = response.data;
        console.log(flagUrl1);
      });
    axios
      .get(
        `https://countryflagsapi.com/png/${match.away_team.name}}`
      )
      .then((response) => {
        flagUrl2 = response;
        console.log(flagUrl2);
      });
    return (
      <MatchRow
        awayT={match.away_team.name}
        homeT={match.home_team.name}
        score={match.home_team.goals + " - " + match.away_team.goals}
        pair={key}
        time={match.datetime.split("T")[0]}
        flag1={flagUrl1}
        flag2={flagUrl2}
      />
    );
  });
  return (
    <>
      <div className="dashboard">
        <Loop />
        <div className="flexHero">
          <img className="hero" src={hero}></img>
          <div className="weather">
            <img className="imageSun" src={weatherImage} alt="" />
            <p>{weatherC} C</p>
            <p>In {city}</p>
          </div>
        </div>
        <h2>FootBall Matches</h2>
        {match}
      </div>
    </>
  );
}

export default Dashboard;
