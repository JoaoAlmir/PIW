import "./Post.css"
import like from './like.png';


function Post({nome,comentario,likes}) {
  return (
    <div className="post">
      
      <h2>{nome} </h2>
      <h3>{comentario}</h3>
      <h3>likes:{likes}</h3>
      <img className="like" src={like}></img>
      
    </div>
  );
}

export default Post;
