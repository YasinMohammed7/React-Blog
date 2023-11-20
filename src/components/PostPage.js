import { useParams, Link } from "react-router-dom"

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className="postPage">
            {post ?
                <article className="post">
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>
                            Delete post
                        </button>
                    </>
                </article>
                : <>
                    <h2>Post not found</h2>
                    <p><Link to='/'>Visit Homepage</Link></p>
                </>}
        </main>
    )
}

export default PostPage