import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../Assets/Other/PP-logo.png';

export default class NavBar extends Component{
  render() {
    return (
    <div className="navBar">
      <div className="logoDiv">
      <Link to='/'>
      <img src={logoImg} alt="Pointy Papers Logo" className="logoImg"/>
      </Link>
      </div>
      <div className="menu">
        <Link to='/' className='menuLink'>PAPERS</Link>
        <Link to='/about' className='menuLink'>ABOUT</Link>
      </div>
    </div>
    );
  }
};
