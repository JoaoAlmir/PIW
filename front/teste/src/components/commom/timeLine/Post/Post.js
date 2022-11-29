import "./Post.css"
import like from './like.png';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";



function Post({nome,comentario,likes}) {
  // let classe = "post";
  // if(likes > 3)
  //   classe = "post-destaque"

  let classe = classNames({"post":likes<=3},{"post-destaque":likes > 3})
  let navigate = useNavigate();


  return (
    <div className={classe}>
      
      <h2>{nome} </h2>
      <h3>{comentario}</h3>
      <h3>likes:{likes}</h3>
      <img alt="like" onClick={()=>{navigate("/matricula/5555")}} className="like" src={like}></img>
      
    </div>
  );
}

export default Post;
