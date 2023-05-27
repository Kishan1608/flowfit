import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <Link to='/' className='link'>
                    <span className='text'>Flowfit Engineering.</span>
                </Link>
            </div>
            <div className="right">
                <div className="contact-info">
                    <span className='phone'>+91 81046 04541</span>
                    <span className='email'>Flowfit17755@gmail.com</span>
                </div>
                <hr />
                <div className="icons">   
                    <img className='icon-img' src="/img/iso.jpg" alt="" />
                    <img className='icon-img' src="/img/ukas.png" alt="" />
                    <img className='icon-img' src="/img/iaf-certified.png" alt="" />
                    <img className='icon-img' src="/img/cer1.jpg" alt="" />
                </div>
            </div>
        </div>
        <hr />
        <div className='menu'>
            <div>
                <Link className='link' to='/'>Home</Link>
            </div>
            <div>
                <Link className='link' to='/about'>About Us</Link>
            </div>
            <div>
                <Link className='link' to='/services'>Services</Link>
            </div>
            <div>
                <Link className='link' to='/products'>Products</Link>
            </div>
            <div>
                <Link className='link' to='contact'>Contact</Link>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar