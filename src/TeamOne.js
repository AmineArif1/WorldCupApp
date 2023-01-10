import { useParams } from "react-router";

function TeamOne() {
  const { teamName } = useParams();
  
  return <>{teamName}</>;
}

export default TeamOne;
