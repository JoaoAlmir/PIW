import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/alunos.api";
import { authContext } from "../../../App";
import { Navegador } from "../../commom/Navegador/Navegador";

function FormularioAluno(){

    let {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    let auth = useContext(authContext);

    function tratarSubmit(data){
        login(data.matricula, data.senha).then(
            function(response){
                // console.log(login);
                auth.setToken(response.data.token);
                navigate("/alunos");
            }
        ).catch(
            function(error){
                console.log(error);
            }
        )
    }

    return(
        <form onSubmit={handleSubmit(tratarSubmit)}>
            Matricula: <input {...register("matricula")} type="text" />
            <br />
            Senha: <input type="password" {...register("senha")}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export function PaginaLogin(){
    return (
        <div>
            <Navegador></Navegador>
            <FormularioAluno></FormularioAluno>
        </div>
    )
}