import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Teste.css"

function Formulario({ onSubmeter }) {


    const { register, handleSubmit } = useForm();
    const submeter = (data) => { onSubmeter(data) };

    return (
        <form onSubmit={handleSubmit(submeter)}>


            <input {...register("nome")} />

            <br />

            <select {...register("disciplina")} >
                <option value="LMS">Linguagem de Marcação e Script</option>
                <option value="PIW">Projeto de Interface Web</option>
                <option value="IHC">Interação humano computador</option>
            </select>

            <br /><br />

            <input type="submit"></input>


        </form>
    )
}

function ListarMatricula({ matriculas }) {



    return (
        <ul>
            {matriculas.map((matricula) => (<li>{matricula.nome} - {matricula.disciplina}</li>))}
        </ul>
    )
}

export function Teste() {

    const [matriculas, setMatriculas] = useState([{ nome: "Victor", disciplina: "PIW" },
    { nome: "Maria", disciplina: "LMS" },]);



    function adicionarMatricula(matricula) {
        setMatriculas([...matriculas, matricula]);

    }

    return (
        <div>
            <ListarMatricula matriculas={matriculas}></ListarMatricula>
            <h1>Matricula</h1>
            <Formulario onSubmeter={adicionarMatricula}></Formulario>
        </div>
    )
}



