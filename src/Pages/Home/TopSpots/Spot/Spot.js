import React from 'react';

const Spot = ({topSpot}) => {
    const {blogImg}=topSpot
    return (
        <div style={{
            backgroundImage: `url(${blogImg})`,
            backgroundSize: "cover",
            height: "250px",
            margin:"10px"
          }}>
            <h4>spot</h4>
        </div>
    );
};

export default Spot;