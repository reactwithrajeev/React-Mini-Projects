import React, { useContext } from "react";
// import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/manageContext";

function Post({ data }) {
  let { handleDelete } = useContext(PostContext);
  return (
    <div className="card postCard">
      <img src={data.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.disc}</p>
        <span className="badge text-bg-success">{data.hash1}</span>
        <span className="badge text-bg-danger">{data.hash2}</span>
        <span className="badge text-bg-warning">{data.hash3}</span>
        <span className="badge text-bg-info">{data.hash4}</span>
      </div>
      <div className="alert alert-success" role="alert">
        Wow!,{data.likecount} People reacted To Your Post !
      </div>
      <button
        type="button"
        className="btn btn-danger position-absolute"
        onClick={() => handleDelete(data.id)}
      >
        {/* <MdDelete/> */}
        delete
      </button>
    </div>
  );
}

export default Post;
