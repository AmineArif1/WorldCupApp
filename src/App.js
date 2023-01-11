import { useEffect, useState } from "react";
import axios from "axios";
import SideMenu from "./SideMenu.js";
import Dashboard from "./Dashboard.js";
import PhoneNav from "./PhoneNav.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  useLocation,
} from "react-router-dom";
import Translate from "./Translate.js";
import Teams from "./Teams.js";
import TeamOne from "./TeamOne.js";
function App() {
  var [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className="flex" style={{ display: "flex" }}>
        <Router>
          <SideMenu sideBar={sideBar} setSideBar={setSideBar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Translate/:preTranslate" element={<Translate />} />
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
