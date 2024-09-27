import React from "react";

function Card({ item }) {
  return (
    <div className="card postCard" style={{ width: "282px" }}>
      <img src={item.img} className="card-img-top card-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.disc}</p>
        <span className="badge text-bg-primary hashTags">{item.hash1}</span>
        <span className="badge text-bg-secondary hashTags">{item.hash2}</span>
        <span className="badge text-bg-success hashTags">{item.hash3}</span>
        <span className="badge text-bg-danger hashTags">{item.hash4}</span>
      </div>
        <span className="badge bg-danger likeBadge">
          {item.likecount}
        </span>
    </div>
  );
}

export default Card;
