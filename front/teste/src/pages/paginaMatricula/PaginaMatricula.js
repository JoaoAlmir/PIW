import { NavLink, useParams } from "react-router-dom";
import { Links } from "../../components/commom/links/Links";

export function PaginaMatricula(){
    
    let params = useParams()


    return (
        <div>
            <Links></Links>
            <h1>pagina de matriculas</h1>
            <NavLink to={"/fictica/" + params.id}><h1>O id é {params.id}</h1></NavLink>

            
        </div>
    )
}