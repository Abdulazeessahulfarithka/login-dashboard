import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./navBar.css"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div className='col-lg-7'>
    <nav className="navbar navbar-expand navbar-light bg-white topbar mt-1 mb-1 static-top shadow">
    <ul className='banner'>
    <img className='bg-no-repeat' src="https://cognisite-cs-image-prod.s3.amazonaws.com/Logo.png" alt="loginPagePoster" />
    </ul>
    <div className='col-lg-4'>
      <SearchIcon/>
    </div>
    <div className='col-sm-3'>
    <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">
              Login
            </span>
            <img
              class="img-profile rounded-circle"
              src="img/undraw_profile.svg"
             alt="login"/>
          </Link>
    </div>
  </nav>
    </div>
    </>
);
  
}

export default NavBar