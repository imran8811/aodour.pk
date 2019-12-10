import React from 'react';

function Topbar(){
    return (
        <nav className="navbar navbar-inverse top-menu">
          <p className="navbar-text cell-no"><i className="fa fa-phone"></i>+92 (42) 37178775</p>
          <p className="navbar-text discount-with">Pick 2 Free Samples With Any Purchase</p>
          <ul className="nav navbar-nav top-menu-left">
            <li><a href="#">FINE STORE</a></li>
            <li><a href="#">TRACK ORDER</a></li>
          </ul>
        </nav>
    )
}

export default Topbar;