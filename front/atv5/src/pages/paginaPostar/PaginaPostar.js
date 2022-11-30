import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { NavSuperior } from "../../components/commom/navSuperior/NavSuperior";
import "./PaginaPostar.css"

function Formulario() {

    const nav = useNavigate()


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => nav("/");



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="texto-comentario" {...register("comentario")} ></input>
            <button>Enviar</button>
        </form>
    )
}

export function PaginaPostar() {


    return (
        <div>
            <NavSuperior />
            <Formulario />
        </div>
    )
}