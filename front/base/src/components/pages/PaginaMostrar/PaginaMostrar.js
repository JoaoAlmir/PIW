import { useEffect, useState } from "react";
import { verItem } from "../../../api/auth";
import { Navegador } from "../../commom/Navegador/Navegador";
import { DetalheItem } from "./DetalheItem";

export function PaginaMostrar() {


    const [item, setItem] = useState();

    
  
    useEffect(() => {
        verItem().then((response) => {
            setItem(response)
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    let teste = [
        {
            titulo: "teste1",
            texto:"aaaaaaaa"
        },
        {
            titulo: "teste2",
            texto:"bbbbbbbbbb"
        },
        {
            titulo: "teste3",
            texto:"cccccccc"
        }
    ]

    // let its = []

    // for(let i of item){
    //     its.push(   
    //         <DetalheItem titulo={i.titulo} texto={i.texto} />
    //     )
    // }

    return (


        <div>
            <Navegador />
            {/* {its} */}
            {console.log(item)}
        </div>

    )
}