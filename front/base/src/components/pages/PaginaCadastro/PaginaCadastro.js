import { useForm } from "react-hook-form";
import { enviarItem } from "../../../api/auth";
import { Navegador } from "../../commom/Navegador/Navegador";

export function PaginaCadastro() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        enviarItem(data).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    };
    return (
        <div>
            <Navegador />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="titulo" {...register("titulo")} />
                <input placeholder="texto"{...register("texto")} />

                <input type="submit" />
            </form>
        </div>
    )

}