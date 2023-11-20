const NewPosts = ({ postBody, setPostBody, postTitle, setPostTitle, handleSubmit }) => {
    return (
        <main className="newPost">
            <h2>New Posts</h2>
            <form onSubmit={handleSubmit} className="newPostForm">
                <label htmlFor="postTitle">
                    Title:
                </label>
                <input type="text" id="postTitle" value={postTitle} required onChange={(e) => setPostTitle(e.target.value)} />

                <label htmlFor="postBody">Body:</label>
                <textarea name="" id="postBody" cols="30" rows="10" required value={postBody} onChange={(e) => setPostBody(e.target.value)}>

                </textarea>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPosts