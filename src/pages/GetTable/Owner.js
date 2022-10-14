import React,{useEffect ,useState} from 'react'
import Header from '../../Components/Common/Header';
import Sidebar from '../../Components/Common/Sidebar';
import { Link } from 'react-router-dom';
import  {fetchOwner}  from '../../redux/getReducer/getOwnerSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  {STATUSES}  from '../../redux/getReducer/getOwnerSlice';




const Owner = () => {
    const dispatch = useDispatch();
  const [pagenumber,setPageNumber] = useState(1)  

  const previousPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber - 1);
  };
  const nextPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber + 1);
  };
  const { data: owner, status } = useSelector((state) => state.owner);
  const history = useNavigate();
 
  useEffect(() => {
    dispatch(fetchOwner({pagenumber}));
  },[dispatch]);
 
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
            <div className="Header ">
               <h4>Owner Listings</h4>
 
               <div>
                 <h6
                   style={{
                     marginRight: "100px",
                     alignItems: "center",
                     color: "rgba(0, 0, 0, 0.6)",
                   }}
                 >
                   Toggle to Arabic
                 </h6>
 
                 <Link to="/ownerform">
                   <button>Add Owner</button>
                 </Link>
               </div>
             </div>
           <>
           <div className="div_maint">            <table >
               <thead>
                 <tr>
                 <th>Owner Name</th>
                  
                
                   
                   <th>Image</th>
                   <th >Action</th>
                 </tr>
               </thead>
               <tbody>
                 {owner.map((item, index) => {
                   return (
                     <>
                       <tr className="tr_table_class">
                       <td>{item.Name}</td>
                        
                     
                   
                         <td>
                           <img src={item.image} alt="" />
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
  )
}

export default Owner