import hero from "./imgs/hero.svg";
import './dashboardStyle.css'
import Loop from './Loop.js'
import sun from './imgs/weather.png'
import MatchRow from './MatchRow.js'
function Dashboard() {
  return (
    <>
    <div className="dashboard">
    <Loop/>
        <div className="flexHero">
      <img className="hero" src={hero}></img>
      <div className="weather">
        <img className="imageSun" src={sun} alt="" />
        <p>20 *c</p>
        <p>In dubai</p>
      </div>
      </div>
      
      <h2>FootBall Matches</h2>
      <MatchRow pair={1}/>
      <MatchRow pair={2}/>
      <MatchRow pair={3}/>
      <MatchRow pair={4}/>
      <MatchRow pair={5}/>
      <MatchRow pair={6}/>



    </div>
    </>
  );
}

export default Dashboard;
