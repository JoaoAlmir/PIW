import { Links } from "../../components/commom/links/Links";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cadastrar } from "../../api/auth";


function FormularioCadastro(){

    const {register, handleSubmit} = useForm();
    const nav = useNavigate();

    
    const sub = (aluno) => {
        cadastrar(aluno).then((response) => {
           nav("/login/")
           console.log(response);
           
       }).catch((error) => {
           console.log(error);
       })
       
    };



    return(
        <form onSubmit={handleSubmit(sub)}>
            nome: <input type="text" {...register("name")}></input> <br/>
            matricula: <input type="text" {...register("matricula")}></input> <br/>
            senha: <input type="text" {...register("senha")}></input> <br/>
            <input type="submit"></input>
        </form>
    )
}


export function Cadastro() {



    return (
        <div>
            <Links/>
            <FormularioCadastro/>

        </div>

    )
}