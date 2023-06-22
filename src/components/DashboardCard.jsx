import React from "react";

function DashboardCard(props) {
    
return(
    <li>
	    <i className={props.icon} onClick={props.onClick}></i>
			<span className="text">
			<h3>{props.number}</h3>
			<p>{props.name}</p>
			</span>
		</li>
)
}

export default DashboardCard;