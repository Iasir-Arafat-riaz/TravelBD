import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./SingleExp.css";
import { useNavigate } from "react-router-dom";

const SingleExp = ({ exp }) => {
    const navigate = useNavigate()
  const { name, writer, desc1, blogImg, price,_id } = exp;
  console.log(name);
  const moreDetails=(id)=>{
navigate(`/blog/${id}`)
  }
  return (
    <div className="blog">
      <div>
        <img src={blogImg} alt="image" />
      </div>
      <div className="informations">
        <p className="blog-name">{name}</p>
        <p>by: {writer}</p>
        <p>${price}</p>
        <p>{desc1}</p>
        <button onClick={()=>{moreDetails(_id)}} className="regular-btn"> details</button>
      </div>
    </div>
  );
};

export default SingleExp;
