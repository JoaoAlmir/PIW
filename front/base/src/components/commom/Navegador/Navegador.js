import { NavLink } from "react-router-dom"
import "./Navegador.css"

export function Navegador(){

    return(
        <div className="nav-container">
            <NavLink to={"/mostrar"} className="nav-botao">Mostrar</NavLink>
            <NavLink to={"/cadastro"}className="nav-botao">Cadastro</NavLink>
        </div>
    )

}