<<<<<<< HEAD
import React, { useState } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch, useSelector } from "react-redux";

=======
import React from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
import { remove } from "../../redux/postReducer/PostHorse";
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link ,useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { useEffect } from "react";
import { fetchHorse,STATUSES } from "../../redux/getReducer/getHorseSlice";
import { MdDelete } from "react-icons/md";
<<<<<<< HEAD
import {BiEdit} from 'react-icons/bi'
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281

const Horse = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
<<<<<<< HEAD
  const { data: horse, status } = useSelector((state) => state.horse);
const [pagenumber,setPageNumber] = useState(1)  

const previousPageHandler = () => {
  setPageNumber((pagenumber) => pagenumber - 1);
};
const nextPageHandler = () => {
  setPageNumber((pagenumber) => pagenumber + 1);
};

   useEffect(() => {
     dispatch(fetchHorse({pagenumber}));
   },[]);
   console.log(horse)
=======
  const { data: getHorse, status } = useSelector((state) => state.horse);
  
   useEffect(() => {
     dispatch(fetchHorse());
   },[]);
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
  const handleRemove = (Id) => {
    dispatch(remove(Id));
    history('/horse')
  };


  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Loading....
      </h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }
  return (
    <>
    <Header />
    <div className='page'>
      <Sidebar />
      <div className="rightsidedata">
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <>
<<<<<<< HEAD
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Color</th>
              <th>KindOfHorse</th>
              <th>Owner</th>
              <th>Trainer</th>
              <th>ActiveTrainer</th>
              <th>Breeder</th>
              <th>Dam</th>
              <th>Sire</th>
              <th>GSire</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
            {
                horse.map((item) => {
                    return(
                        <>
                            <tr>
                            <td>{item.NameEn}</td>
                            <td>{item.Age}</td>
                            <td>{item.Sex}</td>
                            <td>{item.Color}</td>
                            <td>{item.KindOfHorse === null ? <>No Data</> : <>{item.KindOfHorse }</>}</td>
                            <td>{item.Owner === null ? <>No Data</> : <>{item.Owner }</>}</td>
                            <td></td>
                            <td>{item.ActiveTrainer === null ? <>No Data</> : <>{item.ActiveTrainer.Name }</>}</td>
                            <td>{item.Breeder === null ? <>No Data</> : <>{item.Breeder }</>}</td>
                            <td>{item.Dam === null ? <>No Data</> : <>{item.Dam }</>}</td>
                            <td>{item.Sire === null ? <>No Data</> : <>{item.Sire }</>}</td>
                            <td>{item.GSire === null ? <>No Data</> : <>{item.GSire }</>}</td>
                            <td>{item.Remarks === null ? <>No Data</> : <>{item.Remarks }</>}</td>
                    <td><BiEdit/><MdDelete onClick={handleRemove}/></td>
               
                            </tr>
                        </>
                    )
                })
            }
          </table>
=======
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>NameEn </th>
                  <th>NameAr </th>
          
                  <th>Owner</th>
                  <th>Breeder</th>
                  <th>Trainer Id</th>
                <th>Age</th>
                  <th>Color</th>
               
           
           
                  <th>KindOfHorse</th>
           <th>Remarks</th>
           <th>Action</th>
                </tr>
              </thead>
               <tbody>
                {getHorse.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                        <td>{index}</td>
                       
                        <td>{item.NameEn}</td>
                        <td>{item.NameAr}</td>
                      
                        <td>{item.Owner}</td>
                      
                        <td>{item.Breeder}</td>
                        <td>{item.Trainer}</td>
                        <td>{item.Age}</td>
                       <td>{item.Color}</td>
                      
                      
                       <td>{item.KindOfHorse}</td>
                 
                        <td>{item.Remarks} </td>
                      
                        <td>{item.Rating}</td>
                    
                      
                        <td className="table_delete_btn1">
                          <MdDelete
                            style={{
                              fontSize: "22px",
                            }}
                            onClick={() => handleRemove(item._id)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody> 
            </Table>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
          </>
        </div>
        <span className="plusIconStyle">
        <Link to='/horseform'>
        <BsPlusCircleFill style={{
          fontSize:'22px'
        }}/>
        </Link>
        </span>
      </div>
      
    </div>
<<<<<<< HEAD
    <div
              style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "space-between",
              }}
            >
              <button
                className="button btn btn-primary"
                onClick={previousPageHandler}
                disabled={pagenumber === 1}
              >
                Previous
              </button>
              <p
                style={{
                  marginTop: "20px",
                }}
              >
                Page {pagenumber}
              </p>
              <button
                className="button btn btn-primary"
                onClick={nextPageHandler}
                disabled={horse.length <= 1}
              >
                Next
              </button>
            </div>
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
    </>
  )
}
export default Horse