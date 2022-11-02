import "./Card.css"

function Card({nome,idade}) {
  return (
    <div className="card">
      <h1> nome {nome} idade {idade} anos </h1>
    </div>
  );
}

export default Card;
