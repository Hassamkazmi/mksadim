import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHorse } from "../../../redux/getReducer/getHorseSlice";
<<<<<<< HEAD
const RaceTwo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const dispatch = useDispatch()
  const { data: horse } = useSelector((state) => state.horse);
useEffect(()=>{



  dispatch(fetchHorse())


},[dispatch])
 console.log(horse)
 
   const handleNext = () => {
   
    setPage(page + 1);
    setX(1000);
=======
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
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
 
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
           
<<<<<<< HEAD
           Select Horse Name
         </option>
{
  horse.map((horse)=>(
<option value={horse._id}>{horse.NameEn} </option>



)

  )}
</select>
=======
           Select Horse
         </option>
{
  getHorse.map((Horses)=>(
          <option selected=""  className="county" value={Horses._id}>
         {Horses.NameEn}

          </option>
          
    )) }   

</select> 
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281

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
<<<<<<< HEAD
          <input
            type="text"
            className="form-group"
            placeholder="RaceStatus"
            value={formData.RaceStatus}
            required
        
            onChange={(e) =>
              setFormData({ ...formData, RaceStatus: e.target.value })
            }
          />
=======
       <p>RaceStatus</p>
  
<input type="radio" id="html" name="fav_language" value={formData.RaceStatus} onChange={(e) =>
              setFormData({ ...formData, RaceStatus: e.target.value })
            }/>
<p>Upcoming</p>
  
  <input type="radio" id="css" name="fav_language" value={formData.RaceStatus} onChange={(e) =>
              setFormData({ ...formData, RaceStatus: e.target.value  })
            }  checked={true}/>
  <p>Completed</p>
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
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