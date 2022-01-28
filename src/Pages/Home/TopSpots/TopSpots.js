import React, { useEffect, useState } from "react";
import Spot from "./Spot/Spot";
import "./TopSpots.css";

const TopSpots = () => {
  const [topSpots, setTopSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/travellerExperience")
      .then((res) => res.json())
      .then((data) => setTopSpots(data));
  }, [topSpots]);

  console.log(topSpots);
  const filterTopSpots = topSpots.filter(spot=>spot.rating==5)
  console.log(filterTopSpots);
  

  return (
    <div className="topSpots">
    {
        filterTopSpots.map(topSpot=><Spot key={topSpot?._id} topSpot={topSpot} />)
    }
    </div>
  );
};

export default TopSpots;
