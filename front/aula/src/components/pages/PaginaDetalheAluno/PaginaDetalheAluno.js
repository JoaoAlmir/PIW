import { useParams } from "react-router-dom";
import { Navegador } from "../../commom/Navegador/Navegador";

export function PaginaDetalheAluno (){

    let parametros = useParams();
    let matricula = parametros.matricula;

    return(
        <div>
            <Navegador></Navegador>
            <h2>Detalhe do aluno {matricula}</h2>
        </div>
    )
}