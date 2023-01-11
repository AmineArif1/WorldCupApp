import loop from "./imgs/Loop.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Loop(props) {
  const location = useLocation();
  const naviagate = useNavigate();
  let [search, setSearch] = useState("");
  console.log(location.pathname);
  return (
    <>
      <div className="Loop">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && naviagate("/search/" + search);
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
