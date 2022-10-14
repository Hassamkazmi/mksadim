import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchracecourse, STATUSES } from "../../redux/getReducer/getRaceCourseSlice";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import '../../Components/CSS/SubTable.css'
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostRaceCourse";

import { Link } from "react-router-dom";
import Header from "../../Components/Common/Header";
import {BiEdit} from 'react-icons/bi'
=======
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostRaceCourse";
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Header from "../../Components/Common/Header";
<<<<<<< HEAD
import {BiEdit} from 'react-icons/bi'
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd

const News = () => {
  const dispatch = useDispatch();
  const { data: racecourse, status } = useSelector((state) => state.racecourse);
  useEffect(() => {
    dispatch(fetchracecourse());
<<<<<<< HEAD
  }, [dispatch]);

=======
  }, []);
<<<<<<< HEAD

=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
  const handleRemove =  (Id) => {

    

 dispatch(remove(Id));
 
   fetchracecourse();
 
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
    <div className="page">
      <Sidebar />
      <div className="rightsidedata">
        <div
          style={{
            marginTop: "30px",
          }}
        >
<<<<<<< HEAD
            <div className='Header '>

<h4>RaceCourse Listings</h4>







<div>
  <h6 style={{ marginRight: "100px", alignItems: "center", color: "rgba(0, 0, 0, 0.6)" }}>Toggle to Arabic</h6>

  <Link to="/racecourseform">
    <button>Add Racecource</button>
  </Link>
</div>

</div>
        
          <div class="div_maint">
            <table striped bordered hover>
              <thead>
                <tr>
                <th>TrackName</th>
                
                <th>TrackLength</th>
                

                  <th>Country</th>
                  <th>Image</th>
                
             
=======
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
<<<<<<< HEAD
                  <th>Image</th>
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
                  <th>Country</th>
                  <th>TrackName</th>
                  <th>TrackLength</th>
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
            <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {racecourse.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
<<<<<<< HEAD
                       
                        <td>{item.TrackName}</td>
                        <td>{item.TrackLength}</td>
                        <td>{item.Country}</td>
                        <td>

                          <img src={item.image} alt="" />
                        </td>
                     
                   
               
                     
                        <td className="table_delete_btn1">
                        <BiEdit/>
=======
                        <td>{index}</td>
<<<<<<< HEAD
                       <td><image src ={item.image}/></td>
=======
                       
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
                        <td>{item.Country}</td>
                        <td>{item.TrackName}</td>
                        <td>{item.TrackLength}</td>
                     
                        <td className="table_delete_btn1">
<<<<<<< HEAD
                        <BiEdit/>
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
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
<<<<<<< HEAD
            </table>
  
        </div>
     
      </div>
    </div>
    </div>
=======
            </Table>
          </>
        </div>
        <span className="plusIconStyle">
        <Link to='/racecourseform'>
        <BsPlusCircleFill style={{
          fontSize:'22px'
        }}/>
        </Link>
        </span>
      </div>
    </div>
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
    </>
  );
};
export default News;
