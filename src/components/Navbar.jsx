import React,{useState} from 'react'
import profilePic from '../img/people.png'
import Sidebar from './Sidebar';
import DashboardDefault from './DashboardDefault';

export const Navbar = () => {
 const [bool,setBool]=useState(false);
 const [checked,setChecked]=useState(true)
	function handlechecked(){
		checked ? setChecked(false):setChecked(true);
		if(checked){
			document.body.classList.add('dark');
		}
		else{
			document.body.classList.remove('dark');
		}
	}


  return (
    <div>
	<Sidebar hide={bool && "55px"}/>
    <section id="content"  style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}>
        <nav>
			<i onClick={()=>bool ? setBool(false):setBool(true)} className='bx bx-menu' ></i>
			<form action="#">
				<div className="form-input">
					
					<button type="search" className="search-btn"><i className='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" onClick={handlechecked} id="switch-mode" hidden />
			<label htmlFor="switch-mode" className="switch-mode"></label>
			<a href="#" className="notification">
				<i className='bx bxs-bell' ></i>
				<span className="num">8</span>
			</a>
			<a href="#" className="profile">
				<img src={profilePic} alt='profilePicture'/>
			</a>
		</nav>
		<DashboardDefault />
    </section>
    </div>
  )
}

export default Navbar;