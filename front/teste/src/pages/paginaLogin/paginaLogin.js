import { Links } from "../../components/commom/links/Links";
import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import { useContext } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

function FormularioLogin(){

    const nav = useNavigate();
    const { register, handleSubmit } = useForm();

    const auth = useContext(AuthContext);

    console.log(auth);



    
    
    const res = (login_data) => {
        login(login_data).then((response) => {
            auth.setAuth({token:response.data.token, nome:response.data.nome})
       }).catch((error) => {
           console.log(error);
       })
       
    }
    
    return(
        <form onSubmit={handleSubmit(res)}>
            matricula: <input {...register("matricula")}></input> <br/>
            senha: <input {...register("senha")}></input>   <br/>
            <button>enviar</button> <br/>
        </form>
    )
}

export function Login() {

    return (
        <div>
            <Links/>
            <FormularioLogin/>

        </div>
    )

}