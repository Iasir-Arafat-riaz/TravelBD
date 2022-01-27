import React from "react";
import Footer from "../../shared/Footer/Footer";
import Banner from "../Banner/Banner";
import TopSpots from "../TopSpots/TopSpots";
import TravelersExp from "../TravelersExp/TravelersExp";

const HomeRoot = () => {
  return (
    <div>
      <Banner />
      <div className="row">
        <div className="col-md-9">
          <TravelersExp />
        </div>
        <div className="col-md-3">
          <TopSpots/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeRoot;
