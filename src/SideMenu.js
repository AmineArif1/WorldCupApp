import "./menuStyle.css";
import logo from "./imgs/logo.png";
import DashElements from "./DashElements";
import dashboard from "./imgs/dashboard.svg";
import translateLogo from "./imgs/translateLogo.png";
import standing from "./imgs/standing.svg";
import teams from "./imgs/teams.svg";
function SideMenu() {
  return (
    <>
      <div className="Menu">
        <div className="logoDiv">
          <img className="logo" src={logo}></img>
          <h3>Onesport</h3>
        </div>
        <div className="MenuElement">
          <h6>Menu</h6>
          <a href="Dashboard">
            <DashElements name="Dashboard" active={true} img={dashboard} />
          </a>
          <a href="Translate">
            <DashElements name="Translate" img={translateLogo} />
          </a>
          <DashElements name="Standings" img={standing} />
          <DashElements name="Teams" img={teams} />
        </div>
      </div>
    </>
  );
}

export default SideMenu;
