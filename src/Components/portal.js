import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./navBar";
import Sidebar from "./sideBar";
function Portal() {
  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <NavBar/>
            <div class="container-fluid">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portal;