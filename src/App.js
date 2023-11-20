import { useEffect, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import NewPosts from "./components/NewPosts";
import { Routes, useNavigate, Route } from "react-router-dom"
import PostPage from "./components/PostPage";
import { format } from "date-fns";
// import api from "./api/posts"
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const { width } = useWindowSize()

  useEffect(() => {
    const filteredResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  // // useEffect(() => {
  // //   const fetchPosts = async () => {
  // //     try {
  // //       const res = await api.get("/posts")
  // //       setPosts(res.data)
  // //     } catch (err) {
  // //       if (err.res) {
  // //         console.log(err.res.data)
  // //         console.log(err.res.status)
  // //         console.log(err.res.headers)
  // //       } else {
  // //         console.log(`Error: ${err.message}`)
  // //       }
  // //     }
  // //   }

  // //   fetchPosts()

  // }, [])

  const navigate = useNavigate()

  const handleDelete = (id) => {
    const postsLists = posts.filter(post => post.id !== id)
    setPosts(postsLists)
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const newPost = { id, title: postTitle, datetime, body: postBody }
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostBody('')
    setPostTitle('')
    navigate('/')
  }

  return (
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
        width={width}
        posts={searchResults}
      />}>

        <Route index element={<Home
          posts={searchResults}
        />}
        />

        <Route path="post">
          <Route index element={<NewPosts
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />} />
          <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
