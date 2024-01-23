import React from "react";
import Campaign from "../../Campaign/Campaign.js";
import Header from "../../header/header.js";
import Combinenav from "../../nav/combinednav/combinednav.js";
import Maingooter from "../../footer/Mainfooter/Mainfooter.js";
import Subfooter from "../../footer/Subfooter/Subfooter.js";

const Home = () => {
  return (
    <div>
      <Combinenav />
      <Header />
      <Campaign />
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default Home;