import React from 'react'
import RaceOne from '../RaceForm/RaceOne'
import RaceTwo from '../RaceForm/RaceTwo'
import RaceThree from '../RaceForm/RaceThree'
import Header from '../../../Components/Common/Header'
import Sidebar from '../../../Components/Common/Sidebar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from "react";


const RaceForm = () => {
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    RaceKind: "",
    raceName: "",
    Description: "",
    Weather:'',
    RaceStatus: "",
    DayNTime:'',
    RaceCourse:'',
    Horses: '',
    RaceStatus:''
  
  });
 

  const componentList = [
  <RaceOne
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    x={x}
      setX={setX}
  />,
    <RaceTwo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <RaceThree
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,


  ];
  return (
    <>
    <Header />
    <div className="page">
    <Sidebar />
    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h2>Race Form</h2>
        <div>
      <div className="progress-bar">    
      <div
            style={{
              width:
                page === 0
                  ? "33%"
                  : page === 1
                  ? "66%"
                  : page === 2
                  ? "100%"
                  : "100%",
            }}
          ></div>
        
      </div>
      <div className="body">{componentList[page]}</div>
      <ToastContainer /> 
  </div>
      </div>
    </div>
    
  </div>
    </>

  )
}

export default RaceForm