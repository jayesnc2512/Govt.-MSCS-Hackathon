import React,{useState} from 'react'
import profilePic from '../img/people.png'
import Sidebar from './Sidebar';
import DashboardDefault from './DashboardDefault';

export const Navbar = (props) => {
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
	    <section id="content" style={props.style}>
        <nav>
			<i onClick={props.menu} className='bx bx-menu' ></i>
			<form action="#">
				
			</form>
			<input type="checkbox" onClick={handlechecked} id="switch-mode" hidden />
			<label htmlFor="switch-mode" className="switch-mode"></label>
			<a href="#" className="notification">
			</a>
			<a href="#" className="profile">
				<img src={profilePic} alt='profilePicture'/>
			</a>
		</nav>
		</section>
    </div>
  )
}

export default Navbar;