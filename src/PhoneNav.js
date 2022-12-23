import dashboard from './imgs/dashboardYellow.svg'
import translateLogo from './imgs/translateLogo.png'
import standing from './imgs/standing.svg'
import teams from './imgs/teams.svg'
function PhoneNav() {
    return ( <>
        <div className="phoneNav">
            <img src={dashboard}></img>
            <img src={translateLogo}></img>
            <img src={standing}></img>
            <img src={teams}></img>
        </div>
    
    </> );
}

export default PhoneNav;