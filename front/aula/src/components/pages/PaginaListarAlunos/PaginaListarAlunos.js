import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchAlunos } from "../../../api/alunos.api";
import { authContext } from "../../../App";
import { Navegador } from "../../commom/Navegador/Navegador";

function ListaAlunos({alunos}){
    console.log(alunos);
    let lis = alunos.map((aluno)=>(<li>{aluno.nome}</li>))
    return (
        <ul>
            {lis}
        </ul>
    )
}

export function PaginaListarAlunos (){

    let [alunos, setAlunos] = useState([]);
    let auth = useContext(authContext);
    console.log(auth);
    
    useEffect(()=>{
        fetchAlunos(auth.token).then(
            function(response){
                setAlunos(response.data);
            }
        ).catch(
            function(error){
                console.log(error);
            }
        )
    },[]);
    return (
        <div>
            <Navegador></Navegador>
            <ListaAlunos alunos={alunos}></ListaAlunos>           
        </div>
    )
}