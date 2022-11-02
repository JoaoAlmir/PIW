import Post from "./Post/Post";

export function TimeLine() {

    let info_comentario = [
        {
            nome: "Larissa",
            comentario: "Finalmente acabou as eleições",
            likes: "3"
        },
        {
            nome: "Gabriel",
            comentario: "Queria que a copa chegasse logo...",
            likes:"80"
        },
        {
            nome: "Maria",
            comentario: "Quando é as olimpiadas?",
            likes:"1"
        },

    ]

    let posts = [];

    for (let info of info_comentario) {
        console.log(info);
        posts.push(
            <Post nome={info.nome} comentario={info.comentario} likes={info.likes} >  </Post>
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