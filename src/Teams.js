import axios from "axios";
import { useEffect, useState } from "react";
import "./Teams.css";
function Teams() {
  var [teams, setTeams] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://worldcupjson.net/teams",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      setTeams(response.data.groups);
    });
  }, []);
  var teamsList = teams.map((team) => {
    return (
      <div>
        <h1>Group {team.letter}</h1>
        {team.teams.map((team) => {
          return (
            <div className="team">
             
              <h2>{team.name}</h2>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <>
      <h1>Standings</h1>
      {teamsList}
    </>
  );
}

export default Teams;
