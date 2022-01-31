import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import axios from "axios";
import "./AddReview.css"

const AddReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(1);
    const [userComment, setUserComment] = useState("");
    const [profession,setProfession]=useState("")
  
    //Comment Field
    const comments = (e) => {
      setUserComment(e.target.value);
    };
    const TravellerProfession = (e) => {
     setProfession(e.target.value)
    };
  
    const ratingOne = () => {
      setRating(1);
    };
    const ratingTwo = () => {
      setRating(2);
    };
    const ratingThree = () => {
      setRating(3);
    };
    const ratingFour = () => {
      setRating(4);
    };
    const ratingFive = () => {
      setRating(5);
    };
    console.log(rating);
  
    const reviewForm = (e) => {
      e.preventDefault()
      const commentObject = {
        name: user.displayName,
        email: user.email,
        description:userComment,
        rating: rating,
        profession
      };
      console.log(commentObject);
      axios.post("https://frozen-falls-34021.herokuapp.com/reviews", commentObject).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setUserComment("");
          Swal.fire("Your Review Submitted");
          
        }
      });
    };
    return (
        <div className="review text-center">
      <h1>Here write your review </h1>

     <form action="" onSubmit={reviewForm}>
     <textarea
        required
        placeholder="Please Share Your Valuable Review"
        onBlur={comments}
        name=""
        id="reviewText"
        cols="15"
        rows="5"
      ></textarea>
      <input className='reviewInput' required placeholder='enter your profession' onBlur={TravellerProfession}  type="text" />
      <br />
      <button onClick={ratingOne} className="reviewBtn">
        <b>1</b>
      </button>
      <button onClick={ratingTwo} className="reviewBtn">
        <b>2</b>
      </button>
      <button onClick={ratingThree} className="reviewBtn">
        <b>3</b>
      </button>
      <button onClick={ratingFour} className="reviewBtn">
       <b> 4</b>
      </button>
      <button onClick={ratingFive} className="reviewBtn">
        <b>5</b>
      </button>
      <br />
      <input className="reviewSubmit" type="text" type="submit" value="Review"/>
      {/* <input className="reviewSubmit" onClick={reviewForm}>
       <b> Review</b>
      </input> */}
     </form>
    </div>
    );
};

export default AddReview;