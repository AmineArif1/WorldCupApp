import loop from "./imgs/Loop.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import smallLogo from "./imgs/smallLogo.png";

function Loop(props) {
  const location = useLocation();
  const naviagate = useNavigate();
  let [search, setSearch] = useState("");
  console.log(location.pathname);
  return (
    <>
      <div className="Loop">
        <img className="smallLogo" src={smallLogo} alt="logo" />
        <input
          ref={props.reference}
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
          onClick={() => {
            naviagate("/");
            props.topLayer(false);
          }}
          placeholder="Hello! , which team are you looking for ?"
          type="text"
          className={!props.sideBar ? "inputLoop" : "inputLoopTwo"}
        />
        <img
          className={!props.sideBar ? "loop" : "loopTwo"}
          src={loop}
          alt=""
        />
      </div>
    </>
  );
}

export default Loop;
