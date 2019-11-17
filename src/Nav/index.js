import React from 'react';

const Nav = () =>  {
    return(
        <div className="nav-bar">
            <div className="nav-bar__logo">
                <a href="/">Autofixerz.com</a> 
            </div>
            <div>
                <a href="/login" className="nav-bar__link">Login</a>
                <a href="/signup" className="nav-bar__link">Signup</a>
            </div>
        </div>
    )


}

export default Nav;
