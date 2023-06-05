import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
        
            <div className="menu-section">
                <Link className='link' to='/doubleferrule'>
                    <div className="menu-item">
                        Double Ferrule and Tube Fittings
                    </div>
                </Link>
                <Link className='link' to='/pipefitting'>
                    <div className="menu-item">
                        Pipe Fittings
                    </div>
                </Link>
                <Link className='link' to='/needleValve'>
                    <div className="menu-item">
                        Needle Valves
                    </div>
                </Link>
                <Link className='link' to='/manifoldValve'>
                    <div className="menu-item">
                        Manifold Valves
                    </div>
                </Link>
                <Link className='link' to='/thermowell'>
                    <div className="menu-item">
                        Thermo Wells
                    </div>
                </Link>
                <Link className='link' to='/checkValve'>
                    <div className="menu-item">
                        Check Valves
                    </div>
                </Link>
                <Link className='link'>
                    <div className="menu-item">
                        Pressure Gauge
                    </div>
                </Link>
                <Link className='link'>
                    <div className="menu-item">
                        Ball Valve
                    </div>
                </Link>
                <Link className='link'>
                    <div className="menu-item">
                        Flair Connector
                    </div>
                </Link>
                <Link className='link'>
                    <div className="menu-item">
                        Weild Fitting
                    </div>
                </Link>
            </div>
        
    </div>
  )
}

export default Sidebar