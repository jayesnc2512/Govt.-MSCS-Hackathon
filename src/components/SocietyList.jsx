import React, {useState, useEffect} from 'react'
import ParsedJson from './ParsedJson';
import Recent from './Recent';
import SocietyDetails from './SocietyDetails';

const SocietyList = (props) => {
    const [data,setData]=useState()
    const [index,setIndex]=useState()
    const [bool,setBool]=useState(true)
    const[listBool,setListBool]=useState(false)
      // the value of the search field 
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState();


  // the search result

    function getData(){
        ParsedJson()
        .then((data)=>setData(data),setFoundUsers(data))
        .catch(err=>console.log(err,"get error in frontend"))
    }

    useEffect(()=>getData(),[]);


    function handleClick(ele){
      return (
        setBool(false),
        setIndex(ele))
    }


    const filter = (e) => {
      setListBool(true)
       const keyword = e.target.value;
      if (keyword !== '') {
        const results = data.filter((user) => {
          return user.B.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(data);
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };  
  return (
    <div className='table-data'>
    {bool? <Recent />:<SocietyDetails det={index}/>}
    <div className="todo">
      
					<div  className="head" >
						<h3>Registered Societies</h3>        
					</div>
          <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search"
      />     
					<ul className="todo-list">
          {listBool ? (
          foundUsers && foundUsers?.length > 0 ? (
           foundUsers?.map((element) => (
						<li key={element.A} className="completed">
							<p>{element.B}</p>
              <i onClick={()=>handleClick(element)} className='bx bx-dots-vertical-rounded' ></i>
						</li> 
            ))
        ) : (
          <h3>Result Not Found!</h3>
        )):(
          data?.map((element)=>(
            <li key={element.A} className="completed">
							<p>{element.B}</p>
              <i onClick={()=>handleClick(element)} className='bx bx-dots-vertical-rounded' ></i>
						</li> 
          ))
        )
          }       
					</ul>
				</div>
        </div>
  )
}

export default SocietyList;
