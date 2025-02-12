export type PostObject = {
    title: string,
    content: string
} 

interface PostProps {
    post: PostObject,
    totalComments?: number
}


/**
 * Props é convenção, poderia ser qualquer coisa como nome
 */
function Post(props: PostProps) {   

    console.log("post renderizado")
    return ( 
        <div>
            <h3>{props.post.title}</h3>
            <p>{props.post.content}</p>

            {
                props.totalComments && 
                <span>
                    Comentários: {props.totalComments}
                </span>
            }
        </div>
     );
}

export default Post;