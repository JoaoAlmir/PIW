import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../../App";
import "./Navegador.css";

export function Navegador(){

    let navigate = useNavigate();
    let auth = useContext(authContext);

    function clicou(event){
        event.preventDefault();
        navigate("/");
    }

    function logout(){
        auth.setToken(null);
        navigate("/alunos/login");
    }

    if(auth.token == null){
        return (
            <div className="navegador">
                <div className="esquerda">
                    <NavLink end to="/alunos/login">Login</NavLink>
                    <NavLink end to="/alunos/create">Cadastrar</NavLink>
                </div>

            </div>
        )
    }else{
        return (
            <div className="navegador">
                <div className="esquerda">
                    <a onClick={clicou}>Página Principal</a>
                    <NavLink end to="/alunos">Listar Alunos</NavLink>
                </div>
                <a onClick={logout}>Logout</a>

            </div>
        )
    }

    
}