import React, {useState} from 'react'
import "../Form.css";
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const RegForm = () => {
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
					<h1>Register</h1>
          <ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Registeration Form</a>
						</li>
					</ul>
        </div>
      </div>
      <div className='tabel-data'>
    <div className="container">
    <div className="decoration">
      <img src="your-logo.png" alt="Logo"></img>
    </div>
    <h2>Registration Form</h2>
    <form>
    <div className="form-group">
        <label for="name">Name Of Society:</label>
        <input type="text" id="name" name="name" required />
      </div> 
      <div className="form-group">
        <label for="email">Email of Secretary:</label>
        <input type="email" id="name" name="name" required />
      </div>
      
      <div className="form-group">
        <label for="address">Address:</label>
        <input type="address" id="email" name="address" required />
      </div>
      
      <div className="form-group">
        <label for="state">State:</label>
        <input type="text" id="state" name="state" required />
      </div>
      
      <div className="form-group">
        <label for="district">District:</label>
        <input type="text" id="district" name="district" required />
      </div>

    
      <div className="form-group">
        <label for="oparea">Area-Of Operation:</label>
        <input type="text" id="oparea" name="oparea" required />
      </div>
      <div className="form-group">
        <label for="Sector">Sector Type:</label>
        <input type="sectorType" id="state" name="sectorType" required />
      </div>
      
      <div className="form-group">
        <input type="submit" value="Register" />
      </div>
    </form>
  </div>
  </div>
  </main>
  </section>
  </div>
  )
}

export default RegForm