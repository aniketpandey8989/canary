import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Sidetable from '../Sidetable'
import { useState,useEffect } from 'react'
import BarCharts from '../Graph/BarCharts'

const Dashboard = () => {
  return (
    <div>
      <Sidebar/>  
      <div className="main-content">
      <Header/>
       <div className='mt--7 container-fluid'>
       <div className='row'>
       <div className='col-xl-8'>
        <div>
        <div className="rounded bg-white mb-3">
      <div className="rounded-t px-4 py-3 bg-transparent">
        <div className="d-flex align-items-center">
          <div className="col-sm-4">
            <h2 className="text-dark text-xl font-semibold">
              Performance to Plan
            </h2>
          </div>
          <div className="col-sm-5 d-flex align-items-center">
          <span className="text-dark px-3">From</span>
            <input type="date" className="form-control" />
            <span className="text-dark px-3">to</span>
            <input type="date" className="form-control" />
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div>
          <BarCharts/>
          </div>
      </div>
    </div>
      </div>          
       </div>
         <Sidetable/>      
        </div>
        </div>      
      </div>
    </div>
  )
}
export default Dashboard;
