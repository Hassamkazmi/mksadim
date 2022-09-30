import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHorse } from "../../../redux/getReducer/getHorseSlice";
import { toast } from "react-toastify";
const RaceTwo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const dispatch = useDispatch()
  const { data: getHorse, status } = useSelector((state) => state.horse);
 useEffect(()=>{
dispatch(fetchHorse())


 },[])
 
 
   const handleNext = () => {
    if(formData.Horses && formData.Weather  !== ''){
   
    setPage(page + 1);
    setX(1000);}else{
toast.error('please fill the fields')

    }
 
}
  return (
<motion.div
       initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className=" container"
    >
      <div className="row container maincontainer">
        <div className="col-sm-12 col-md-6 formMain">
        <select name="Country" className="county"  onChange={(e) =>
              setFormData({ ...formData, Horses: e.target.value })
            }  required>
              <option value="0" className="county">
           
           Select Horse
         </option>
{
  getHorse.map((Horses)=>(
          <option selected=""  className="county" value={Horses._id}>
         {Horses.NameEn}

          </option>
          
    )) }   

</select> 

          <input
            type="text"
            className="form-group"
            placeholder="Weather"
            required
         value={formData.Weather}
            onChange={(e) =>
              setFormData({ ...formData, Weather: e.target.value })
            }
          />
       <p>RaceStatus</p>
  
<input type="radio" id="html" name="fav_language" value={formData.RaceStatus} onChange={(e) =>
              setFormData({ ...formData, RaceStatus: e.target.value })
            }/>
<p>Upcoming</p>
  
  <input type="radio" id="css" name="fav_language" value={formData.RaceStatus} onChange={(e) =>
              setFormData({ ...formData, RaceStatus: e.target.value  })
            }  checked={true}/>
  <p>Completed</p>
        </div>
       
      </div>

      <div className="btnDivide container">
        <button
          onClick={() => {
            setPage(page - 1);
            setX(-1000);
          }}
        >
          Previous
        </button>

        <button onClick={handleNext}>Next</button>
      </div>
    </motion.div>
  )
}

export default RaceTwo