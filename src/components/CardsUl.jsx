import React, {useState, useEffect } from 'react'
import DashboardCard from './DashboardCard'
import ParsedJson from './ParsedJson';
import {Link } from 'react-router-dom';


const CardsUl =() => {
const [data,setData]=useState()

    function getData(){
        ParsedJson()
        .then((data)=>setData(data))
        .catch(err=>console.log(err,"get error in frontend"))

    
}
useEffect(()=>getData(),[]);
 
//  {data !== undefined &&   console.log(data);}



  return (
    <ul className="box-info">
        <DashboardCard 
            icon="bx bxs-buildings"
            number={data !== undefined && (data.length)}
            name="No. of Society Registered"
        />
        <DashboardCard 
            icon="bx bxs-group"
            number="1020"
            name="Total Visitors"
        />
        <Link to="/registration">
        <div className='form'>
        <DashboardCard 
            icon="bx bx-plus"
            name="New Registeration"
        />
        </div>
        </Link>
    </ul>
  )
}

export default CardsUl