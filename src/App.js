import { useEffect, useState } from "react";
import axios from "axios";
import SideMenu from "./SideMenu.js";
import Dashboard from "./Dashboard.js";
import PhoneNav from "./PhoneNav.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Translate from "./Translate.js";
import Teams from "./Teams.js";
import TeamOne from './TeamOne.js';
function App() {
  return (
    <>
      <div className="flex" style={{ display: "flex" }}>
        <Router>
          <SideMenu />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Translate" element={<Translate />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/search/:teamName" element={<TeamOne />} />

    
          </Routes>
          <PhoneNav />
        </Router>
      </div>
    </>
  );
}

export default App;
