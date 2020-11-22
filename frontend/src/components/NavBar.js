import React from 'react';
import logo from './Images/logo.svg';
import profile from './Images/profile.svg';

const NavBar=()=>{
    return (
        <>
        <nav class="navbar navbar-expand-lg  bg-light static-top">
  <div class="container">
    <a class="navbar-brand" href="/#">
          <img src={logo} alt=""/>
        </a>
        <p>Intugine</p>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarResponsive" aria-controls="navbarResponsive" 
    aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/#">Home
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Brands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Transporters</a>
        </li>
        <li class="nav-item">
            <a href="/#">
          <img src={profile} alt=""/> 
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default NavBar;
