import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Sidetable from '../Sidetable'
import { useState,useEffect } from 'react'
import Graph from '../Graph'
import BarCharts from '../Graph/BarCharts'
const Dashboard = () => {
  const[sales,setSales]=useState("")
  const[data,setData]=useState("");

  return (
    <div>
      <Sidebar />
      <div className="main-content">
      <Header/>
       <div className='mt--7 container-fluid'>
       <div className='row'>
       <div className='col-xl-8'>    
       </div>
        </div>
        </div>      
      </div>
    </div>
  )
}
export default Dashboard;
