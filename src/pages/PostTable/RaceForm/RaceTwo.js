import { motion } from "framer-motion";


 
const RaceTwo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const handleNext = () => {
   
    setPage(page + 1);
    setX(1000);
 
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
          <input
            type="text"
            placeholder="RaceCourse"
            required
            className="form-group"
          
            onChange={(e) => setFormData({ ...formData, RaceCourse: e.target.value })}
          />
          <input
            type="text"
            className="form-group"
            placeholder="Weather"
            required
         
            onChange={(e) =>
              setFormData({ ...formData, Weather: e.target.value })
            }
          />
          <input
            type="text"
            className="form-group"
            placeholder="RaceStatus"
            required
        
            onChange={(e) =>
              setFormData({ ...formData, RaceStatus: e.target.value })
            }
          />
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