import React from "react";
import Maingooter from "../footer/Mainfooter/Mainfooter.js";
import Subfooter from "../footer/Subfooter/Subfooter";

import Combinenav from "../nav/combinednav/combinednav.js";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Combinenav />
      <Maingooter />
      <Subfooter />
      <Outlet />
    </div>
  );
};

export default Layout;