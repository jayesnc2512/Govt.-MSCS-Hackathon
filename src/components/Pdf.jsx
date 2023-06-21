import React, {useState,useEffect} from 'react';
import ParsedJson from './ParsedJson';

const Pdf = (props) => {
    const [data,sethata]=useState()

    function getData(){
        ParsedJson()
        .then((data)=>sethata(data))
        .catch(err=>console.log(err,"get error in frontend"))
        .then(()=>window.print)
    }
    useEffect(()=>getData(),[]);

  return (
    <div id='printable'>
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
              {data?.map((ele)=>(
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
    </div>
  )
}

export default Pdf