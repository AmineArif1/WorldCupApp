import { useState } from "react";
import axios from "axios";
import SideMenu from "./SideMenu.js";
import Dashboard from "./Dashboard.js";
import PhoneNav from "./PhoneNav.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex" style={{ display: "flex" }}>
        <SideMenu />
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Standings" element={<></>} />
            {/*<Route
              path="/favoris"
              element={
                <Favoris
                  preference={preference}
                  setPreference={setPreference}
                /> */}
            {/* } */}
            {/* /> */}
            {/* <Route path="/" element={<Main />} /> */}
          </Routes>
        </Router>
        <PhoneNav />
      </div>
    </>
  );
}

export default App;
