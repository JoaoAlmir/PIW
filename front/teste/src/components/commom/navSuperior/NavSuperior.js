import "./NavSuperior.css"
import logo from './icon.png';

export function NavSuperior() {
    return(
        <div className="nav-sup">
            <img src={logo} alt="logo"></img>
            <div className="timeline">TimeLine</div>
            <div className="postar">Postar</div>
            <div className="login">João Almir</div>
        </div>
    )
}