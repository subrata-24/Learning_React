import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice'

const PostView = () => {

    const {isLoading, error, posts}= useSelector((state) => state.post)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    
  return (
    <div>
          <h1>View Post</h1>
          {isLoading && <h4>Loading...</h4>}
          {error && <h3>{error}</h3>}
          {posts && posts.map((post) => {
              return <article>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
              </article>
          })}
    </div>
  )
}

export default PostView
