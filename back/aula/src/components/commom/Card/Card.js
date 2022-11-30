import classNames from "classnames";
import "./Card.css";

export function Card({titulo, conteudo="padrão", verde=false}){
    let classes = classNames("card", {"verde": verde});
    return <div className={classes}>
        <h2 className="title">
            {titulo}
        </h2>
        <p className="content">
            {conteudo}
        </p>
    </div>
}