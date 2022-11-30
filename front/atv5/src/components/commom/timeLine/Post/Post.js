import "./Post.css"
import like from './like.png';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";



function Post({nome,texto,likes,comentario}) {
  // let classe = "post";
  // if(likes > 3)
  //   classe = "post-destaque"

  let classe = classNames({"post":likes<=3},{"post-destaque":likes > 3})
  let navigate = useNavigate();


  return (
    <div className={classe}>
      
      <h2>{nome} </h2>
      <h3>{texto}</h3>
      <h3>likes:{likes}</h3>
      <img alt="like"  className="like" src={like}></img>
      <h4 style={{"marginTop":"80px"}}>{comentario}</h4>
      <button className="botao-comentario" onClick={()=>{navigate("/postar")}}>Comentar</button>
      
    </div>
  );
}

export default Post;
