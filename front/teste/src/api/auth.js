import axios from 'axios';


export function login(login_data){
    return(
        axios({
            method: 'POST',
            url: "http://localhost:9999/alunos/login",
            data: login_data
       })
    )
}

export function cadastrar(aluno){
    return(
        axios({
            method: 'POST',
            url: "http://localhost:9999/alunos",
            data: aluno,
       })
    )

}
