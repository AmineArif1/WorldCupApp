import argentina from "./imgs/argentina.svg";
import italy from "./imgs/italy.svg";
function MatchRow(props) {
  return (
    <>
      <div className={props.pair%2==1 ? "matchRow" : "matchRow originColorRow"}  >
        <div className="fr9a">
          <img src={argentina}></img>
          <p className="fr9aName">Argentina</p>
        </div>
        <p className="score">1 - 2</p>
        <div className="fr9a">
          <img src={italy}></img>
          <p className="fr9aName">Italy</p>
        </div>
        <p className="fullTime">Full - Time</p>
        <p className="date">18 December 2022</p>
      </div>
    </>
  );
}

export default MatchRow;
