import "./menuStyle.css";
import logo from "./imgs/logo.png";
import DashElements from "./DashElements";
import dashboardYellow from "./imgs/dashboardYellow.svg";
import dashboardWhite from "./imgs/dashboardWhite.svg";
import translateLogo from "./imgs/translateLogo.png";
import teamsWhite from "./imgs/teamsWhite.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import yellowTranslate from "./imgs/yellowTranslate.png";
import teamsYellow from "./imgs/teamsYellow.png";
function SideMenu() {
  const naviagate = useNavigate();
  var [dashboardB, setDashboard] = useState(true);
  var [translateB, setTranslate] = useState(false);
  var [teamsB, setTeams] = useState(false);

  var listofElements = [setDashboard, setTranslate, setTeams];
  function setOthersFalse(elm) {
    listofElements.forEach((element) => {
      if (element != elm) {
        element(false);
      }
    });
  }
  useEffect(() => {
    console.log(dashboardB);
    console.log(translateB);
    console.log(teamsB);
  }, [dashboardB, translateB, teamsB]);

  return (
    <>
      <div className="Menu">
        <div className="logoDiv">
          <img className="logo" src={logo}></img>
          <h3>Onesport</h3>
        </div>
        <div className="MenuElement">
          <h6>Menu</h6>
          <div
            onClick={() => {
              naviagate("/dashboard");
              setDashboard(true);
              setOthersFalse(setDashboard);
            }}
          >
            <DashElements
              name="Dashboard"
              active={dashboardB}
              img={!dashboardB ? dashboardWhite : dashboardYellow}
            />
          </div>
          <div
            onClick={() => {
              naviagate("/translate");
              setTranslate(true);
              setOthersFalse(setTranslate);
            }}
          >
            <DashElements
              name="Translate"
              active={translateB}
              img={!translateB ? translateLogo : yellowTranslate}
            />
          </div>
          <div
            onClick={() => {
              naviagate("/teams");
              setTeams(true);
              setOthersFalse(setTeams);
            }}
          >
            <DashElements
              active={teamsB}
              name="Teams"
              img={!teamsB ? teamsWhite : teamsYellow}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
