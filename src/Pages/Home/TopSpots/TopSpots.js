import React, { useEffect, useState } from "react";
import Spot from "./Spot/Spot";
import "./TopSpots.css";

const TopSpots = () => {
  const [topSpots, setTopSpots] = useState([]);
  useEffect(() => {
    fetch("https://frozen-falls-34021.herokuapp.com/travellerExperience")
      .then((res) => res.json())
      .then((data) => setTopSpots(data));
  }, []);

  //console.log(topSpots);
  const filterTopSpots = topSpots.filter(spot=>spot.rating==5)
  //console.log(filterTopSpots);
  

  return (
    <div className="topSpots">
        <h5 className="m-3"><b>Top Spots</b></h5>
    {
        filterTopSpots.map(topSpot=><Spot key={topSpot?._id} topSpot={topSpot} />)
    }
    </div>
  );
};

export default TopSpots;
