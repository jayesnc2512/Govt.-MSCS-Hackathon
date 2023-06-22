import React, {useState,useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import ParsedJson from './ParsedJson';



const Pdf = (props) => {
    const [data,setdata]=useState();
    // const[state,setState]=useState();
    const {state}= useParams();

    function getData(){
        ParsedJson()
        .then((data)=>{
            return setdata(data)
        })
        .catch(err=>console.log(err,"get error in frontend"))
        .then(()=>window.print)
    }

    useEffect(()=>getData(),[]);

  return (
    <div id='printable'>
    <div className="btn-download-pdf" onClick={window.print}>
					<i className='bx bxs-cloud-download' ></i>
					<span className="text">Download PDF</span>
				</div>
        <h1 style={{textAlign:"center"}}>List of Societies</h1>
        <table className='pdfTable'>
            <th>
              Sr.no
            </th>
            <th>
              Name Of Society
            </th>
            <th>
              Address
            </th>
            <th>
              State3
            </th>
            <th>
              District
            </th>
            <th>
              DOR
            </th>
            <th>
              Area
            </th>
            <th>
              Sector
            </th>
              {data?.map((ele)=>ele.D===state&&(
                <tr>
                <td>
             {ele.A}
            </td>
            <td>
             {ele.B}
            </td>  
            <td>
             {ele.C}
            </td> 
            <td>
             {ele.D}
            </td> 
            <td>
             {ele.E}
            </td>
            <td>
             {ele.F}
            </td> 
            <td>
             {ele.G}
            </td> 
            <td>
             {ele.H}
            </td>
            </tr>
            ))}
        </table>
        {console.log(data)}
    </div>
  )
}

export default Pdf