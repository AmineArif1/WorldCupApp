import axios from "axios";
import { useEffect, useState } from "react";
import "./Teams.css";
import { useLocation } from "react-router-dom";
import Loop from "./Loop";
import SpringIn from "./SpringIn";

function Teams(props) {
  var [teams, setTeams] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://workerteamwc.elarifamine1.workers.dev/",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      setTeams(response.data);
      console.log(response.data);
    });
  }, []);

  var teamsList = teams.map((team) => {
    return (
      <SpringIn>
        <div
          className={
            location.pathname != "/teams" ? "opacityZero" : "animationTeam"
          }
        >
          <h1 className="group">Group {team.group}</h1>
          <div className="team">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Wins</th>
                  <th>Draws</th>
                  <th>Losses</th>
                  <th>Goals For</th>
                  <th>Points</th>
                </tr>
              </thead>
              {team.teams.map((team) => {
                return (
                  <tbody>
                    <tr className="Rows">
                      <td>
                        <h2>{team.name_en}</h2>
                      </td>
                      <td>
                        <h2>{team.w}</h2>
                      </td>
                      <td>
                        <h2>{team.d}</h2>
                      </td>
                      <td>
                        <h2>{team.l}</h2>
                      </td>
                      <td>
                        <h2>{team.gf}</h2>
                      </td>

                      <td>
                        <h2>{team.pts}</h2>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </SpringIn>
    );
  });

  return (
    <>
      <div className={props.sideBar ? "widthTmanin" : "widthCent"}>
        <Loop sideBar={props.sideBar} setSideBar={props.setSideBar} />
        <div className="Teams">{teamsList}</div>;
      </div>
    </>
  );
}

export default Teams;
