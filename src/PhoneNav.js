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
function PhoneNav() {
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
      <div className="phoneNav">
        <img
          onClick={() => {
            naviagate("/");
            setDashboard(true);
            setOthersFalse(setDashboard);
          }}
          alt=""
          src={!dashboardB ? dashboardWhite : dashboardYellow}
        ></img>
        <img
          onClick={() => {
            naviagate("/translate/welcome");
            setTranslate(true);
            setOthersFalse(setTranslate);
          }}
          alt=""
          src={!translateB ? translateLogo : yellowTranslate}
        ></img>

        <img
          onClick={() => {
            naviagate("/teams");
            setTeams(true);
            setOthersFalse(setTeams);
          }}
          alt=""
          src={!teamsB ? teamsWhite : teamsYellow}
        ></img>
      </div>
    </>
  );
}

export default PhoneNav;
