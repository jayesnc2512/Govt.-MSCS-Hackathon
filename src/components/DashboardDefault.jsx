import React,{useState} from 'react';
import image from '../img/people.png';
import ParsedJson from './ParsedJson';
import CardsUl from './CardsUl';
import SocietyList from './SocietyList';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Recent from './Recent';
import { Link } from "react-router-dom";

const DashboardDefault = (props) => {
	const[bool,SetBool]=useState(false)

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }

  return (
	<div>
	<Sidebar hide={bool && "55px"} active="active"/>
    <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    />
	<section id="content"  style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}>
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
		</section>
	</div>
  )
}

export default DashboardDefault