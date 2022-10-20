import React, { useEffect,useState } from "react";

import { fetchTrainer, STATUSES } from "../../redux/getReducer/getTrainerSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostTrainer";
import { Link } from "react-router-dom";

import swal from 'sweetalert';



const Trainer = () => {
  const [data ,setdata] = useState()
  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
      setmodaldata(data)
      await setShow(true)
  };

  const dispatch = useDispatch();

  const { data: trainer, status } = useSelector((state) => state.trainer);
  const handleRemove = (Id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        dispatch(remove(Id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 8;


  useEffect(() => {
    dispatch(fetchTrainer({limit}));
      setpageCount(Math.ceil(trainer / limit));
      setItems(trainer);
  }, []);
  
const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    // const commentsFormServer = await fetchComments(currentPage);

    setItems(trainer);
    
  };
  if (status === STATUSES.LOADING) {
    return <h2 className="loader"></h2>;
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

   <div className="page">
  
      <div className="rightsidedata">
        <div
          style={{
            marginTop: "30px",
          }}

        >    <div className='Header '>

        <h4>Trainer Listings</h4>
        
        
        
        
        
        
        
        <div>
          <h6 style={{ marginRight: "100px", alignItems: "center", color: "rgba(0, 0, 0, 0.6)" }}>Toggle to Arabic</h6>
        
          <Link to="/trainerform">
            <button>Add Trainer</button>
          </Link>
        </div>
        
        </div>

          <>
          <div className="div_maintb">
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
                        <td style={{marginRight:"100px"}}>{item.Detail}</td>
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
export default Trainer;
