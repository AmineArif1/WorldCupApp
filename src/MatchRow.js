import argentina from "./imgs/argentina.svg";
import italy from "./imgs/italy.svg";
function MatchRow(props) {
  return (
    <>
      <div
        className={props.pair % 2 == 1 ? "matchRow" : "matchRow originColorRow"}
      >
        <div className="fr9a">
          <img src={props.flag2}></img>
          <p className="fr9aName">{props.homeT}</p>
        </div>
        <p className="score">{props.score}</p>
        <div className="fr9a">
          <img src={props.flag1}></img>
          <p className="fr9aName">{props.awayT}</p>
        </div>
        <p className="fullTime">Full - Time</p>
        <p className="date">{props.time}</p>
      </div>
    </>
  );
}

export default MatchRow;
