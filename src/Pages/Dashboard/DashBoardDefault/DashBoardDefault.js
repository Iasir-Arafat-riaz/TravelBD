import React from "react";
import video from "../../../videoAndImages/dashboard.mp4"
import "./DashboardDefault.css"

const DashBoardDefault = () => {
  return (
    <div className='dashboardDefault'>
            <video autoPlay style={{ position: 'absolute', width: '100%', left: '50%', top: '50%', height: '100%', objectFit: 'cover', transform: "translate(-50%,-50%)", zIndex: "-1" }}>
                <source src="https://www.youtube.com/embed/weyD-7FXeMw" type='video/mp4' />
            </video>
        </div>
  );
};

export default DashBoardDefault;
