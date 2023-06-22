import React from 'react'
import { Link } from "react-router-dom";


export const Sidebar= (props) => {
  return (
    <section id="sidebar" style={{width:props.hide}}>
    <a href="#" className="brand">
        <i className='bx bxs-smile'></i>
        <span className="text">CRCS</span>
    </a>
    <ul className="side-menu top">
        <li className={props.active}>
            <Link to="/"  aria-current="page">
                <i className='bx bxs-dashboard' ></i>
                <span className="text">Dashboard</span>
            </Link>
        </li>
        <li className={props.active2}>
        <Link to="/charts"  aria-current="page">
                <i className='bx bxs-shopping-bag-alt' ></i>
                <span className="text">Charts</span>
            </Link>
        </li>
        <li className={props.active3}>
        <Link to="/analytics"  aria-current="page">
                <i className='bx bxs-doughnut-chart' ></i>
                <span className="text">Analytics</span>
            </Link>
        </li>
    </ul>
    <ul className="side-menu">
       
        <li>
            <a href="#" className="logout">
                <i className='bx bxs-log-out-circle' ></i>
                <span className="text">Logout</span>
            </a>
        </li>
    </ul>
</section>
  )
}

export default Sidebar;