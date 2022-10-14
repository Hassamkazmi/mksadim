import React,{useState , useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import Header from '../../Components/Common/Header';
import Sidebar from '../../Components/Common/Sidebar';
import { fetchSlider,STATUSES } from '../../redux/getReducer/getSliderSlice';


const Slider = () => {

    const dispatch = useDispatch();
    const [pagenumber,setPageNumber] = useState(1)  
  
    const previousPageHandler = () => {
      setPageNumber((pagenumber) => pagenumber - 1);
    };
    const nextPageHandler = () => {
      setPageNumber((pagenumber) => pagenumber + 1);
    };
    const { data: slider, status } = useSelector((state) => state.slider);
    const history = useNavigate();
   
    useEffect(() => {
      dispatch(fetchSlider({pagenumber}));
    },[]);
    console.log(slider)
   
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
               <h4>Slider Listings</h4>
 
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
 
                 <Link to="/sliderform">
                   <button>Add Slider</button>
                 </Link>
               </div>
             </div>
           <>
           <div className="div_maint">            <table >
               <thead>
                 <tr>
                 <th>Title English</th>
                 <th>Title Arabic </th>
                  
                
                   
                   <th>Image</th>
                   <th >Action</th>
                 </tr>
               </thead>
               <tbody>
                 {slider.map((item, index) => {
                   return (
                     <>
                       <tr className="tr_table_class">
                       <td>{item.TitleEn}</td>
                        
                     <td>{item.TitleAr}</td>
                   
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

export default Slider