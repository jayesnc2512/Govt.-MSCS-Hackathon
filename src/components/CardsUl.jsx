import React, {useState, useEffect } from 'react'
import DashboardCard from './DashboardCard'
import ParsedJson from './ParsedJson'


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
        
        <DashboardCard 
            icon="bx bx-plus"
            name="New Registeration"
        />
    </ul>
  )
}

export default CardsUl