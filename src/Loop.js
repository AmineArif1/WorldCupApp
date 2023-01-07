import loop from "./imgs/Loop.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Loop() {
  const naviagate = useNavigate();
  let [search, setSearch] = useState("");

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
          className="inputLoop"
        />
        <img className="loop" src={loop} alt="" />
      </div>
    </>
  );
}

export default Loop;
