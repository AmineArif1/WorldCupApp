import axios from "axios";
import { useEffect, useState } from "react";
import "./Teams.css";
import { useLocation } from "react-router-dom";

function Teams(props) {
  var [teams, setTeams] = useState([]);
  const location = useLocation();
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
        <h1 className="group">Group {team.letter}</h1>
        <div className="team">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Points</th>
              </tr>
            </thead>
            {team.teams.map((team) => {
              return (
                <tbody>
                  <tr className="Rows">
                    <td>
                      <h2>{team.name}</h2>
                    </td>
                    <td>
                      <h2>{team.wins}</h2>
                    </td>
                    <td>
                      <h2>{team.draws}</h2>
                    </td>
                    <td>
                      <h2>{team.losses}</h2>
                    </td>
                    <td>
                      <h2>{team.goals_for}</h2>
                    </td>
                    <td>
                      <h2>{team.goals_against}</h2>
                    </td>
                    <td>
                      <h2>{team.group_points}</h2>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  });

  return <div className="Teams">{teamsList}</div>;
}

export default Teams;
