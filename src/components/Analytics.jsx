import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../Analytics.css';


const Analytics = (props) => {
		
	const[bool,SetBool]=useState(false)

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }
  return (
	<div>
	<Sidebar hide={bool && "55px"} active="active3"/>
    <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    />
    <section id="content"  style=	{{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
	>
    <main>
    	<div className="head-title">
				<div className="left">
					<h1>Analytics</h1>
          <ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Analytics</a>
						</li>
					</ul>
        </div>
        <div className='table-data'>
        <div className="row">
        <div className="card card-headline">
          <div>
            <h4 className="card-h4">
              Label
            </h4>
            <h2 className="card-h2">
              data
            </h2>
          </div>
          <span className="card-headline-icon uil uil-user"></span>
        </div>
        <div className="card card-headline">
          <div>
            <h4 className="card-h4">
              Label
            </h4>
            <h2 className="card-h2">
              data
            </h2>
          </div>
          <span className="card-headline-icon uil uil-heart"></span>
        </div>
        <div className="card card-list">
          <div className="card-list-item">
            <span className="card-list-badge primary"></span>
            <div>
              <h4 className="card-h4">
                Reach
              </h4>
              <h2 className="card-h2">
                677k
              </h2>
            </div>
          </div>
          <div className="card-list-item">
            <span className="card-list-badge accent"></span>
            <div>
              <h4 className="card-h4">
                downloads
              </h4>
              <h2 className="card-h2">
                1.2m
              </h2>
            </div>
          </div>
          <div className="card-list-item">
            <span className="card-list-badge default"></span>
            <div>
              <h4 className="card-h4">
                label 
              </h4>
              <h2 className="card-h2">
                data
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card has-extra-padding card-progress">
          <div>
            <h3 className="card-h3">
              Engagement
            </h3>
            <h4 className="card-h4">
              Population Engagement Rate
            </h4>
            <h2 className="card-h2 has-bottom-margin">
              33%
            </h2>
          </div>
          <div className="card-progress-donut"></div>
        </div>
        <div className="card has-extra-padding card-growth">
          <h3 className="card-h3">
            Growth
          </h3>
          <div className="card-growth-headlines">
            <div>
              <h4 className="card-h4">
                2020
              </h4>
              <h2 className="card-h2 has-bottom-margin">
                1.4k
              </h2>
            </div>
            <div>
              <h4 className="card-h4">
                2021
              </h4>
              <h2 className="card-h2 has-bottom-margin">
                1.4k
              </h2>
            </div>
            <div>
              <h4 className="card-h4">
                2022
              </h4>
              <h2 className="card-h2 has-bottom-margin">
                1.4k
              </h2>
            </div>
          </div>
          <div className="card-bar-chart">
          <div>
              <div className="card-bar-default" style={{height: "32px"}}></div>
              <div className="card-bar-primary" style={{height: "15px"}}></div>
            </div>
          <div>
              <div className="card-bar-default" style={{height: "32px"}}></div>
              <div className="card-bar-primary" style={{height: "15px"}}></div>
            </div>
            <div>
              <div className="card-bar-default" style={{height: "30px"}}></div>
              <div className="card-bar-primary" style={{height: "20px"}}></div>
            </div>
            <div>
              <div className="card-bar-default" style={{height: "50px"}}></div>
              <div className="card-bar-primary" style={{height: "60px"}}></div>
            </div>
            
            <div>
              <div className="card-bar-default" style={{height: "50px"}}></div>
              <div className="card-bar-primary" style={{height: "30px"}}></div>
            </div>

            <div>
              <div className="card-bar-default" style={{height: "32px"}}></div>
              <div className="card-bar-primary" style={{height: "15px"}}></div>
            </div>
            <div>
              <div className="card-bar-default" style={{height: "50px"}}></div>
              <div className="card-bar-primary" style={{height: "40px"}}></div>
            </div>
            <div>
              <div className="card-bar-default" style={{height: "60px"}}></div>
              <div className="card-bar-primary" style={{height: "60px"}}></div>
            </div>
          </div>
        </div>
        <div className="card has-extra-padding card-regions">
          <h3 className="card-h3">
            Label
          </h3>
          <h4 className="card-h4">
            data
          </h4>
          <h2 className="card-h2 has-bottom-margin">
            1.4k
          </h2>
          <div className="card-bar-chart is-gauge-chart">
            <div>
              <div className="card-bar-default" style={{height: "20px"}}></div>
              <div className="card-bar-primary" style={{height: "70px"}}></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </main>
    </section>
	</div>
  )
}

export default Analytics;