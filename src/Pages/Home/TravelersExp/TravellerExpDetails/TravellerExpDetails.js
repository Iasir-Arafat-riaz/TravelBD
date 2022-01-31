import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faStar } from '@fortawesome/free-solid-svg-icons'
import "./TravellerExpDetails.css";

const TravellerExpDetails = () => {
  const [blogDetals, setBlogDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://frozen-falls-34021.herokuapp.com/travellerExperience/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, [id]);
   
//   const singleBlog= blogDetals.find(single=>single._id==id)
  const { name, category, desc1, desc2, price, loaction, day, blogImg, writerImg, writer, date, facility, accommodation, _id,rating } = blogDetals

  console.log(rating);
  return (
    <section className='blog-details' style={{ background: "#FBF6F2" }}>

    <article className=' flex justify-center pt-10 pb-4'>
        <button className='bg-yellow-600 text-white p-1 px-2 rounded'>{category}</button>
    </article>

    <h1 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-5xl font-semibold text-center'>{name}</h1>

    <article className='flex  items-center gap-10 justify-center mt-10'>

        <article className=' flex items-center gap-3'>

            <img src={writerImg} className='rounded-circle' width="50" height="50" alt="blogImgae" />
            <h6 className='font-semibold'>{writer}</h6>

        </article>

        <h6 className='font-semibold'>
            <i class="far fa-clock ml-8 "></i> {date}
        </h6>
        {rating == 5 ? (
              <div className="icons">
                <FontAwesomeIcon  icon={faStar} />
                <FontAwesomeIcon  icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 5 && rating >= 4 ? (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 4 && rating >= 3 ? (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 3 && rating >= 2 ? (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            )}

        <h6 className='font-semibold'>
            <i class="fas  fa-map-marker-alt"></i> {loaction}
        </h6>


    </article>

    <article className='flex container justify-center mt-10'>
        <img style={{
            width: '80%',
            height: '50%', verticalAlign: 'top'
        }} src={blogImg} alt="" />
    </article>

    <article className='container'>

        <article className="row">

            <article className="col-lg-8">

                <p className='lg:ml-32 w-5/6 text-md font-medium my-10 text-blue'>{desc1}</p>
                <p className='lg:ml-32 w-5/6 text-md font-medium  '>{desc2}</p>

                <h1 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-4xl font-semibold lg:ml-32 mt-8 mb-6'>Why You Should Go There</h1>

                <img src={blogImg}
                    width="85%"
                    className='rounded-3 lg:ml-32' alt="" />

                <p className='lg:ml-32 text-blue text-justify mt-7'>{facility}</p>



                <h2 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-4xl  font-semibold lg:ml-32 mt-8 mb-6'>Accommodation</h2>
                <p className='lg:ml-32 text-blue text-justify'>{accommodation}</p>

                <h2 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-4xl  font-semibold lg:ml-32 mt-8 mb-6'>Cost</h2>
                <p className='lg:ml-32 text-blue text-justify'>Our total cost ${price} for {day} days.</p>

                {/* blog review */}
                {/* <BlogReview id={_id} /> */}


            </article>

            {/* <article className="col-lg-4">
                <AboutWriter name={writer} />
                <PopularBlogs />
                <ReviewForm id={_id} />
            </article> */}

        </article>

    </article>


</section>
  );
};

export default TravellerExpDetails;
