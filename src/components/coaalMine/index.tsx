import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TableMines from '../Tablesmines'
const Coalmines = () => {
  const [Data,setData]=useState([])
  const useEffect=()=>{
    // setData();
  }
  return (
    <div>
      <Sidebar/>
      <div className="main-content">
        <Header/>
        <TableMines/>
      </div>
    </div>
  )
}

export default Coalmines