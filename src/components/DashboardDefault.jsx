import React from 'react';
import image from '../img/people.png';
import ParsedJson from './ParsedJson';
import CardsUl from './CardsUl';
import SocietyList from './SocietyList';
import Recent from './Recent';
import { Link } from "react-router-dom";

const DashboardDefault = () => {

  return (
    <main>
			<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<Link to="/pdf"  aria-current="page">
				<div className="btn-download">
					<i className='bx bxs-cloud-download' ></i>
					<span className="text">Get PDF</span>
				</div>
				</Link>
			</div>
			<CardsUl />

			
				<SocietyList />
	
		</main>
		
  )
}

export default DashboardDefault