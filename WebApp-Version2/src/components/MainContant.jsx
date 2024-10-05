import React, { useContext } from 'react'
import PostList from './PostList'
import Form from './Form';
import { PostContext } from '../store/manageContext';

function MainContant() {
  let {tabName} = useContext(PostContext)
  return (
    <>
    {tabName=== "Home"?<PostList/> :   <Form/>}
    </>
  )
}

export default MainContant