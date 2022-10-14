import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchTrainer, STATUSES } from "../../redux/getReducer/getTrainerSlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostTrainer";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";

const News = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  
  const { data: trainer, status } = useSelector((state) => state.trainer);
  const handleRemove = (Id) => {
    dispatch(remove(Id));

<<<<<<< HEAD
=======
<<<<<<< HEAD
  };
 
  useEffect(() => {
    dispatch(fetchTrainer(trainer));

  }, []);
 

=======

>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
  };
 
  useEffect(() => {
    dispatch(fetchTrainer(trainer));

  }, []);
<<<<<<< HEAD
 

=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
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

        >    <div className='Header '>

        <h4>RaceCourse Listings</h4>
        
        
        
        
        
        
        
        <div>
          <h6 style={{ marginRight: "100px", alignItems: "center", color: "rgba(0, 0, 0, 0.6)" }}>Toggle to Arabic</h6>
        
          <Link to="/trainerform">
            <button>Add Trainer</button>
          </Link>
        </div>
        
        </div>

          <>
          <div className="div_maint">
            <table >
              <thead>
                <tr>              
                <th>Name</th>
                <th>Age</th>
                  <th>Detail</th>
                                   <th>Image</th>
               
              
                  
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {trainer.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
        
                    
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Detail}</td>
                        <td>
                          <img src={item.image} alt="" />
                        </td>                        
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
            </table>
            </div>
          </>
        </div>
       
      </div>
    </div>
   </>
  );
};
export default News;
