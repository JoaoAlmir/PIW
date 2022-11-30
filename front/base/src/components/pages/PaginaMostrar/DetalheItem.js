import "./DetalheItem.css"

export function DetalheItem({ titulo, texto }) {


    return (
        <div className="card">
            <h1>{titulo}</h1>
            <h3> {texto}</h3>
        </div>
    )

}