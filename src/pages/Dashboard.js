import React from 'react'
import Sidebar from '../Components/Common/Sidebar';
import '../Components/CSS/home.css'
 
const Dashboard = () => {
  return (
    <div className='page'>
      <Sidebar />
      <div className='rightsidedata'>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard
