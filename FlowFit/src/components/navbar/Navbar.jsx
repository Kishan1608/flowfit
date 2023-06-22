import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {AiFillCaretDown} from 'react-icons/ai';
import {HiMenuAlt2} from 'react-icons/hi';
import './Navbar.scss';

const Navbar = () => {
    const[open ,setOpen] = useState(false);
    const[responsive, setResponsive] = useState(false);

    const menuClick = () => {
        setResponsive(!responsive);
    }
  return (
    <div className="navbar">
        <div className="menu-icon" onClick={menuClick}>
            <HiMenuAlt2 style={{fontSize: '28px', color: '#fff',padding: '5px'}}/>
            <p>Flowfit Engineering.</p>
        </div>
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
        <div className={`menu${responsive?"responsive":""}`}>
            <div className='menuitem' onClick={() => setResponsive(!responsive)}>
                <Link className='link' to='/'>Home</Link>
            </div>
            <div className='menuitem' onClick={() => setResponsive(!responsive)}>
                <Link className='link' to='/about'>About Us</Link>
            </div>
            <div className='menuitem' onClick={() => setResponsive(!responsive)}>
                <Link className='link' to='/services'>Services</Link>
            </div>
            <div className='menuitem'>
                <div className='prod' onClick={() =>{setOpen(!open);}}>Products <AiFillCaretDown />
                {
                    open && <div className="options" onClick={() => setResponsive(!responsive)}> 
                        <Link className='link' to='/doubleferrule'>Double Ferrule</Link>
                        <Link className='link' to='/pipefitting'>Pipe Fitting</Link>
                        <Link className='link' to='/needleValve'>Needle Valve</Link>
                        <Link className='link' to='/manifoldValve'>Manifold Valve</Link>
                        <Link className='link' to='/thermowell'>Thermo Well</Link>
                        <Link className='link' to='/checkValve'>Check Valve</Link>
                        <Link className='link' to='/pressureGauge'>Pressure Gauge</Link>
                        <Link className='link' to='/ballvalve'>Ball Valve</Link>
                        <Link className='link' to='/flairconnector'>Flair Connector</Link>
                        <Link className='link' to='/weldfitting'>Weld Fitting</Link>
                    </div>
                }
                </div>
            </div>
            <div className='menuitem' onClick={() => setResponsive(!responsive)}>
                <Link className='link' to='contact'>Contact</Link>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar