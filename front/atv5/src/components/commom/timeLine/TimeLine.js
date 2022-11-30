import Post from "./Post/Post";

export function TimeLine() {

    let info_comentario = [
        {
            nome: "Larissa",
            texto: "Finalmente acabou as eleições",
            likes: "3",
            comentario:"demorou mas acabou"
        },
        {
            nome: "Gabriel",
            texto: "Queria que a copa chegasse logo...",
            likes:"80",
            comentario:"vamos vingar da alemanha"
        },
        {
            nome: "Maria",
            texto: "Quando é as olimpiadas?",
            likes:"1",
            comentario:"o que importa é a copa"
        },

    ]

    let posts = [];

    for (let info of info_comentario) {
        console.log(info);
        posts.push(
            <Post nome={info.nome} texto={info.texto} likes={info.likes} comentario={info.comentario} >  </Post>
        )
    }


    return (
        <div className="nav-meio">

            <div className="post">
                {posts}
            </div>
        </div>
    )

}