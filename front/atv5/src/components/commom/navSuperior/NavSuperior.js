import "./NavSuperior.css"
import logo from './icon.png';
import { NavLink } from "react-router-dom";

export function NavSuperior() {
    return(
        <div className="nav-sup">
            <img src={logo} alt="logo"></img>
            <NavLink to={"/"} className="timeline">TimeLine</NavLink>
            <NavLink to={"/postar/"}className="postar">Postar</NavLink>
        </div>
    )
}