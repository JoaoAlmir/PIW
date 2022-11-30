import { ButtonContador } from "../../commom/Button/Button";
import { Card } from "../../commom/Card/Card";
import { Navegador } from "../../commom/Navegador/Navegador";

function add(a,b){
    return a+b;
}

export function PaginaPrincipal(){
    let nome = "João";
    let link = (<a href="http://google.com">Link</a>);
    let h1 = (<h1>Meu h1</h1>)

    let info_cards = [
        {
            titulo:"Copa do mundo",
            conteudo:"Vem, hexa!"
        },
        {
            titulo:"Fitness",
            conteudo:"Vem, monstro!"
        },
        {
            titulo:"Melhores",
            conteudo:"Nope!"
        },
        {
            titulo:"Tecnologias",
            conteudo:"React, Node ..."
        },
    ]

    let cards =[];
    for(let info of info_cards){
        cards.push(
            <Card titulo={info.titulo} conteudo={info.conteudo} verde={true}></Card>
        )
    }

    let info_sup = [
        {
            suplemento:"whey",
            nivel:1
        },
        {
            suplemento:"creatine",
            nivel:2
        },
        {
            suplemento:"café",
            nivel:3
        },
    ]
    let linhas = [];
    for(let sup of info_sup){
        linhas.push(
            <tr>
                <td>{sup.suplemento}</td>
                <td>{sup.nivel}</td>
            </tr>
        )
    }

    return <div>
        <Navegador></Navegador>
        {add(6,5)} {nome} {link}
        {cards}   

        <table>
            <tr>
                <th>Suplementos</th>
                <th>Nível de motivação</th>
            </tr>
            {linhas}
        </table>
        <ButtonContador></ButtonContador>
    </div>
}