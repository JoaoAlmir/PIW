import { NavLink } from "react-router-dom";
import "./Links.css"

export function Links(){


    return(
        <div className="container-link">
            <NavLink to={'/'}><div className="container-botao">feed</div></NavLink>
            <NavLink to={'/matricula/'}><div className="container-botao">matricula</div></NavLink>
            <NavLink style={{"marginLeft":"auto"}} to={'/cadastro/'}><div className="container-botao">cadastro</div></NavLink>
            <NavLink to={'/login/'}><div className="container-botao">login</div></NavLink>
        </div>
    )
}