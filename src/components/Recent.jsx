import React,{useState, useEffect} from 'react'
import image from '../img/people.png';
import ParsedJson from './ParsedJson';
import dayjs from 'dayjs';


const Recent = () => {
    // const [data,setData]=useState()
	// const [visible,setVisible]=useState(true)

    // function getData(){
    //     ParsedJson()
    //     .then((data)=>setData(data))
    //     .catch(err=>console.log(err,"get error in frontend"))   
	// }
	// useEffect(()=>getData(),[]);

	const info="An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government. In order to achieve the objective The Multi State Cooperative Societies Bill was introduced in the Parliament.The bill having been passed by both the Houses of Parliament received the assent of the President on 3rd July 2002 and it came on the Statute Book as The Multi State Cooperative Societies ACT 2002 (39 of 2002)."
	

  return (
	<div className="order">
					<div className="head">
						<h3>Multi State Cooperative Societies ACT, 2002</h3>
						<i className='bx bx-search' ></i>
						<i className='bx bx-filter' ></i>
					</div><p>
					<a href='https://mscs.dac.gov.in/Form/Form1.pdf' target='_blank'>
					<span className="status completed">Form I</span></a>
					<a href='https://mscs.dac.gov.in/Form/Form2.pdf' target='_blank'>
					<span className="status process">Form II</span> </a>
					<a href='https://mscs.dac.gov.in/Form/Form3.pdf' target='_blank'>      
					<span className="status pending">Form III</span></a>      
					<a href='https://mscs.dac.gov.in/Form/Form4.pdf' target='_blank'>    
					<span className="status completed">Form IV</span></a>
					<a href='https://mscs.dac.gov.in/Form/Form5.pdf' target='_blank'>       
					<span className="status process">Form V</span></a>  
					</p>
					<br />       
					<p>{info}</p>
					</div>
  
  
	)
}

export default Recent