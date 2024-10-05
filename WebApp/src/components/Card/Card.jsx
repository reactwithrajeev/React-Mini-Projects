import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CardContext } from "../../store/Card-Context-Store";

function Card({ item }) {
  const {deletePost} = useContext(CardContext)
  return (
    <div className="card postCard" >
      <img src={item.img} className="card-img-top card-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.disc}</p>
        <span className="badge text-bg-primary hashTags">{item.hash1}</span>
        <span className="badge text-bg-secondary hashTags">{item.hash2}</span>
        <span className="badge text-bg-success hashTags">{item.hash3}</span>
        <span className="badge text-bg-danger hashTags">{item.hash4}</span>
      </div>
      <div className="alert alert-success reactions" role="alert">
       This Post Has Been Reacted By {item.likecount} People!
      </div>
      <span className="badge bg-danger likeBadge" onClick={()=>deletePost(item.id)}>
        <MdDelete />
      </span>
    </div>
  );
}

export default Card;
