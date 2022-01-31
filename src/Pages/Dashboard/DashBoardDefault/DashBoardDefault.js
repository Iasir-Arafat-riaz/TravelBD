import React from "react";
import "./DashboardDefault.css"
import bgImg from "../../../videoAndImages/TravelBd.png"

const DashBoardDefault = () => {
  return (
    <div className='dashboardDefault' style={{
        backgroundImage: `url(${bgImg})`,
       
      }}>
    <h1 className='dashboardText'>TravelBD Dashboard</h1>
     </div>
  );
};

export default DashBoardDefault;
