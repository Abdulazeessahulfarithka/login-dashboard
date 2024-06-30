import React, { useContext } from 'react';
import Badge from "../assets/badge.png"
import './navBar.css';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import profileImage from '../assets/profile.png';  

function NavBar() {
  const userData = useContext(UserContext);

  return (
    <div className='col-lg-7'>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mt-1 mb-1 static-top shadow">
        <ul className='banner'>
          <img className='bg-no-repeat' src="https://cognisite-cs-image-prod.s3.amazonaws.com/Logo.png" alt="loginPagePoster" />
        </ul>
        <div className='col-lg-3 mx-40 mt-3'>
        <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
 
    <i class="fas fa-search"></i>
  </span>
</div>
        </div>
        <div className='col-lg-1 mt-4'>
        <img  className='w-[50%]'  src={Badge} alt="badge"/>
        </div>
        <div className='col-sm-3'>
          <Link
            to="/"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
           
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {userData.user.name}
            </span>
            <img
            className='w-[12%]'
              src={profileImage}  
              alt="profile"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
