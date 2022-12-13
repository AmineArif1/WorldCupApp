import { useState } from "react";
import axios from "axios";
import SideMenu from "./SideMenu.js";
import Dashboard from "./Dashboard.js";
import PhoneNav from "./PhoneNav.js";
function App() {
  return (
    <>
      <div className="flex" style={{ display: "flex" }}>
        <SideMenu />
        <Dashboard />
        <PhoneNav/>
      </div>
    </>
  );
}

export default App;
