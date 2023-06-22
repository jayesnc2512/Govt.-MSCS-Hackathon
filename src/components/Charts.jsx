import React, { useState } from 'react'
import ChartOption from './ChartOption';
import SectorTypeGraph from "../img/sectorTypeGraph.png";
import stateGraph from "../img/StateGraph.png";
import DashboardCard from './DashboardCard';
import StateList from './StateList';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Charts = (props) => {
	const[img,setImg]=useState(SectorTypeGraph)
	const [graphBool,setGraphBool]=useState(true)

	
	const[bool,SetBool]=useState(false)

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }


    
  return (
	<div>
	<Sidebar hide={bool && "55px"} active="active2"/>
    <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    />
    <section id="content"  style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}>
    <main className='charts'>
    	<div className="head-title">
				<div className="left">
					<h1>Charts</h1>
          <ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Charts</a>
						</li>
					</ul>
        </div>
      </div>
      <ul className="box-info">
<div onClick={()=>(setGraphBool(false),setImg(stateGraph))}>
    <DashboardCard 
        icon="bx bxs-city"
        name="State-wise Chart"
    />
	</div>
	<div onClick={()=>(setGraphBool(false),setImg(SectorTypeGraph))}>
    <DashboardCard 
        icon=" bx bx-edit-alt"
        name="Sector wise chart"
    />
	</div>
	
    
</ul>
	  <div className='table-data'>
	  <div className='order'>
	  {graphBool ? <h3>Select Chart you Want</h3>:(
	  <img src={img
	  } className="graph" alt="SectorTypeGraph"></img>
	  )}
	  </div>
	  <div className="todo">
	  <StateList />
	  </div>
	  </div>
    </main>
    </section>
	</div>
  )
}

export default Charts;