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
        "http://api.weatherapi.com/v1/current.json?key=c943211fe5144993947183757221612&q=Doha&aqi=no"
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
  let key = 0;
  let match = matches.map((match) => {
    if (
      match.away_team.name == "England" ||
      match.home_team.name == "England" ||
      match.home_team.name == "Wales" ||
      match.away_team.name == "Wales" ||
      match.home_team.name == "Tunisia" ||
      match.away_team.name == "Tunisia" ||
      match.home_team.name == "Saudi Arabia" ||
      match.away_team.name == "Saudi Arabia" ||
      match.home_team.name == "Poland" ||
      match.away_team.name == "Poland" ||
      match.home_team.name == "Korea Republic" ||
      match.away_team.name == "Korea Republic" ||
      match.home_team.name == "Switzerland" ||
      match.away_team.name == "Switzerland" ||
      match.home_team.name == "Portugal" ||
      match.away_team.name == "Portugal"
    ) {
      return;
    }
    key = key + 1;

    return (
      <MatchRow
        awayT={match.away_team.name}
        homeT={match.home_team.name}
        score={match.home_team.goals + " - " + match.away_team.goals}
        pair={key}
        time={match.datetime.split("T")[0]}
        flag1={`https://flagcdn.com/48x36/${match.away_team.country
          .toLowerCase()
          .substring(0, 2)}.png`}
        flag2={`https://flagcdn.com/48x36/${match.home_team.country
          .toLowerCase()
          .substring(0, 2)}.png`}
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
