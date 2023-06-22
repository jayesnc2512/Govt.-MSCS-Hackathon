import React, {useState,useEffect} from 'react';
import ParsedJson from './ParsedJson';
import {Link}  from "react-router-dom";
import { useNavigate } from "react-router-dom";


const StateList = (props) => {
    const [data,setdata]=useState()
    const[states,setStates]=useState("")
    const navigate=useNavigate();
  


    function getData(){
        ParsedJson()
        .then((data)=>{
            setStates(data.map((ele)=>ele.D))
            setdata(data)
        })
        .catch(err=>console.log(err,"get error in frontend"))

    }
    useEffect(()=>getData(),[]);
    var uniqueState=Array.from(new Set(states))

    
return(
    <div className='table-data'>
    <h3>Get State-wise List</h3>
    <ul className="todo-list">
    { uniqueState?.map((element)=>(
            <li  className="not-completed" onClick={()=>navigate(`/pdf/${element}`)}>
							<p>{element}</p>
						</li> 
        ))} 
		</ul>
        {console.log(uniqueState)}
    </div>
)
}

export default StateList;