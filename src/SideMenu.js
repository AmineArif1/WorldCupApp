import "./menuStyle.css";
import logo from "./imgs/logo.png";
import DashElements from "./DashElements";
import dashboardYellow from "./imgs/dashboardYellow.svg";
import dashboardWhite from "./imgs/dashboardWhite.svg";
import translateLogo from "./imgs/translateLogo.png";
import teamsWhite from "./imgs/teamsWhite.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import yellowTranslate from "./imgs/yellowTranslate.png";
import teamsYellow from "./imgs/teamsYellow.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";

function SideMenu(props) {
  const parentRef = useRef(null);
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
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.setSideBar(false);
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

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  useEffect(() => {
    console.log(dashboardB);
    console.log(translateB);
    console.log(teamsB);
  }, [dashboardB, translateB, teamsB]);
  useEffect(() => {
    console.log(props.sideBar);
  }, [props.sideBar]);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <>
      <div className={"menuIcon"}>
        <Link
          to="#"
          className={!props.sideBar ? "menu-bars" : "menu-bars-Crois"}
        >
          {!props.sideBar ? (
            <FaIcons.FaBars onClick={() => props.setSideBar(!props.sideBar)} />
          ) : (
            <AiIcons.AiOutlineClose
              onClick={() => props.setSideBar(!props.sideBar)}
            />
          )}
        </Link>
      </div>
      <div ref={wrapperRef} className={props.sideBar ? "Menu" : "dead"}>
        <div>
          <div className="logoDiv">
            <img className="logo" src={logo}></img>
          </div>
          <div className="MenuElement">
            <div
              onClick={() => {
                naviagate("/");
                setDashboard(true);
                setOthersFalse(setDashboard);
                props.setSideBar(!props.sideBar);
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
                naviagate("/translate/Welcome");
                setTranslate(true);
                setOthersFalse(setTranslate);
                props.setSideBar(!props.sideBar);
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
                props.setSideBar(!props.sideBar);
              }}
            >
              <DashElements
                active={teamsB}
                name="Teams"
                img={!teamsB ? teamsWhite : teamsYellow}
              />
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
