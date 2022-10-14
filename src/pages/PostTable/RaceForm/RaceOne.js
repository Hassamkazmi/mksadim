import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchracecourse } from "../../../redux/getReducer/getRaceCourseSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const RaceOne = ({ formData, setFormData, page, setPage, x, setX }) => {
 const dispatch = useDispatch()
  const { data: racecourse } = useSelector((state) => state.racecourse);
useEffect(()=>{


<<<<<<< HEAD
=======

>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
  dispatch(fetchracecourse())


},[dispatch])


  const handleNext = () => {
   
<<<<<<< HEAD
    setPage(page+1)
    setX(1000)
=======
<<<<<<< HEAD
    setPage(page+1)
    setX(1000)
=======
>>>>>>> 4c3634b98efdd44e0c1cd6fe257405bf59fef281
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
    
      if (
       formData.raceName !== '' &&
      formData.RaceKind !== '' &&
      formData.NameAr !== '' 
    
     
    ) {
      setPage(page + 1);
      setX(1000);
    } else {
      toast.error("Please fill the field");
    }
   };
  return (
    <motion.div
    initial={{ x: x }}
    animate={{ x: 0 }}
    transition={{ duration: 1 }}
    className=" container"
  >
    <div className="row container maincontainer">
      <div className="col-sm-12 col-md-6 formMain">
        <input
          type="text"
          placeholder="RaceName"
          required
          className="form-group"
<<<<<<< HEAD
          value={formData.raceName}
=======
    value={formData.raceName}
>>>>>>> bdfbae53913aa59f758c8c775b68562fcc6b65bd
          onChange={(e) =>
            setFormData({ ...formData, raceName: e.target.value })
          }
        />
        <input
          type="text"
          className="form-group"
          placeholder="RaceKind"
          required
          value={formData.RaceKind}
          onChange={(e) => setFormData({ ...formData, RaceKind: e.target.value })}
        />
        <input
          type="text"
          className="form-group"
          placeholder="Description "
          required
      value={formData.Description}
          onChange={(e) =>
            setFormData({ ...formData, Description: e.target.value })
          }
        />
          <select name="Country" className="county"  onChange={(e) =>
              setFormData({ ...formData, RaceCourse: e.target.value })
            }  required>
              <option value="0" className="county">
           
           Select Race Course Name
         </option>
{
  racecourse.map((course)=>(
<option value={course._id}>{course.TrackName} </option>



)

  )}
</select>
      
      </div>
      
    </div>
    <div className="container btndiv">
      <button onClick={handleNext}>Next</button>
    </div>
  </motion.div>
  )
}

export default RaceOne