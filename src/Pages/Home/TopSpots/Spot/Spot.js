import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spot = ({topSpot}) => {
    const navigate = useNavigate()
    const {blogImg,name,rating,_id}=topSpot
const detailTopSpot=(id)=>{
console.log("hobee");
navigate(`/${id}`)
}
    return (
        <div onClick={()=>detailTopSpot(_id)} style={{
            backgroundImage: `url(${blogImg})`,
            backgroundSize: "cover",
            height: "250px",
            margin:"10px"
          }}>
            <h6 className='pt-5'>{name}</h6>
            <small><b>Rating: {rating} Star</b></small>
        </div>
    );
};

export default Spot;