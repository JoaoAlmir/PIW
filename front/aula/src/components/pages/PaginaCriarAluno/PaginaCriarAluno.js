import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarAluno } from "../../../api/alunos.api";
import { Navegador } from "../../commom/Navegador/Navegador";

function FormularioAluno(){

    let {register, handleSubmit} = useForm();

    let navigate= useNavigate();

    function tratarSubmit(data){
        console.log(data);
        criarAluno(data.nome, data.matricula, data.senha).then(
            function(aluno){
                console.log(aluno);
                navigate("/alunos/login");
            }
        ).catch(
            function(error){
                console.log(error);
            }
        )
    }

    return(
        <form onSubmit={handleSubmit(tratarSubmit)}>
            Nome: <input {...register("nome")} type="text" />
            <br />
            Matricula: <input {...register("matricula")} type="text" />
            <br />
            Senha: <input type="password" {...register("senha")}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export function PaginaCriarAluno(){
    return (
        <div>
            <Navegador></Navegador>
            <FormularioAluno></FormularioAluno>
        </div>
    )
}