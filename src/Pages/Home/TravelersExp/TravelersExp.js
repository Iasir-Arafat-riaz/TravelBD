import React, { useEffect, useState } from "react";
import SingleExp from "./SingleExp/SingleExp";
import "./TravelerExp.css"

const TravelersExp = () => {
  const [travellerExperince, setTravellerExperince] = useState([]);
  useEffect(() => {
    fetch("https://frozen-falls-34021.herokuapp.com/travellerExperience")
      .then((res) => res.json())
      .then((data) => setTravellerExperince(data));
  }, []);
  console.log(travellerExperince);
  return (
    <div className="travelExp">
      <h2 className="mt-5">
        Traveller Experiences
      </h2>
      {
          travellerExperince.map(exp=><SingleExp exp={exp}/>)
      }
    </div>
  );
};

export default TravelersExp;
