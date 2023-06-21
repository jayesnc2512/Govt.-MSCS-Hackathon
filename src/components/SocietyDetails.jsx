import React from 'react'

const SocietyDetails = (props) => {
    const data=props.det;
   


  return (
    <div className='order'>
        <h3 style={{paddingBottom:"25px "}}>SocietyDetails:-</h3>
        <div>

        <h5 style={{padding:"5px 30px 0px "}}>Name:-</h5>
        <p style={{padding:"0px 30px 5px",paddingTop:"0px"}}>{data.B}</p>

        <h5 style={{padding:"5px 30px ",paddingBottom:"0px"}}>Address:-</h5>
        <p style={{padding:"0px 30px 5px",paddingTop:"0px"}}>{data.C}</p>

        <h5 style={{padding:"5px 30px ",paddingBottom:"0px"}}>District/State:-</h5>
        <p style={{padding:"30px",paddingTop:"0px",display:"inline",verticalAlign:"top"}}>{data.E}, {data.D}</p>

        <h5 style={{padding:"10px 30px 0px"}}>Date of Registration:-</h5>
        <p style={{padding:"30px",paddingTop:"0px",display:"inline",verticalAlign:"top"}}>{data.F}</p>

        <h5 style={{padding:"10px 30px 0px"}}>Area Of Operation:-</h5>
        <p style={{padding:"30px",paddingTop:"0px",display:"inline",verticalAlign:"top"}}>{data.G}</p>

        <h5 style={{padding:"10px 30px 0px"}}>Sector Type:-</h5>
        <p style={{padding:"30px",paddingTop:"0px",display:"inline",verticalAlign:"top"}}>{data.H}</p>
        </div>
    </div>
  )
}

export default SocietyDetails