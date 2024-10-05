import React, { useContext, useRef } from 'react'
import { PostContext } from '../store/manageContext'


function Form() {
  const {addPost} = useContext(PostContext)

  const userIdEL = useRef()
  const postImageEL = useRef()
  const postTitleEL = useRef()
  const postCotentEL = useRef()
  const postTagsEL = useRef()
  const postReactionEL = useRef()

  const handleSubmit = (event)=>{
    event.preventDefault();

    const userID = userIdEL.current.value;
    const postImage = postImageEL.current.value;
    const postTitle = postTitleEL.current.value;
    const postCotent = postCotentEL.current.value;
    const postTags = postTagsEL.current.value.split(/[\s,]+/).filter(tag => tag.trim() !== "");
    const postReaction = postReactionEL.current.value;

    addPost(userID,postImage,postTitle,postCotent,postTags,postReaction)
  }

  return (
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User ID</label>
    <input ref={userIdEL} type="text" className="form-control" id="userId" aria-describedby="emailHelp" placeholder='Enter Your User Id Here...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter Your Image Url</label>
    <input ref={postImageEL} type="url" className="form-control" id="imageURL" aria-describedby="emailHelp" placeholder='Enter Post Image Link...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Post Title</label>
    <input ref={postTitleEL} type="text" className="form-control" id="postTitle" aria-describedby="emailHelp" placeholder='Enter Your Post Title Here...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Post Content</label>
    <textarea ref={postCotentEL} type="text" className="form-control" id="postContent" aria-describedby="emailHelp" placeholder='Enter Your Content Here...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Tags</label>
    <input ref={postTagsEL} type="text" className="form-control" id="postTags" aria-describedby="emailHelp" placeholder='Enter Your tags Here using spaces...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Reaction Count</label>
    <input ref={postReactionEL} type="number" className="form-control" id="postReaction" aria-describedby="emailHelp" placeholder='Enter Your Post Reaction Here...'/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
  )
}

export default Form