import React, { useContext } from 'react'
import Post from './Post'
import { PostContext } from '../store/manageContext'

function PostList() {

  let {postList} = useContext(PostContext)
  return (
    <>
    <div className="postGroup">
      {postList.map((data)=> <Post key={data.id} data={data}/>)}
    </div>
    </>
  )
}

export default PostList