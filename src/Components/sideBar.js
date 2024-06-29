import React from "react";
import { Link } from "react-router-dom";
import  Card from "./card"
function Sidebar() {
  return (
    <>
      <div className="">
      <div
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          Cognisite
        </div>
      </a>

      <hr class="sidebar-divider my-0" />

      <button type="button" class="btn btn-outline-primary nav-item active">
        <Link class="nav-link" to="/Portal/Board">
          <i class="fas fa-fw fa-tachometer-alt mx-4"></i>
          <span>Dashboard</span>
          
        </Link>
      </button>
      <button  type="button" class="btn btn-outline-primary  nav-item active">
        <Card>
          <i class="fas fa-fw fa-tachometer-alt mx-4"></i>
        </Card>
      </button>
    </div>
      </div>
    </>
  );
}

export default Sidebar;