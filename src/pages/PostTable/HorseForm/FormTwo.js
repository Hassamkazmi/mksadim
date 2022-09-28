import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const { data: trainer, status } = useSelector((state) => state.trainer);


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
            placeholder="Breeder"
            required
            className="form-group"
          value={formData.Breeder}
            onChange={(e) => setFormData({ ...formData, Breeder: e.target.value })}
          />
          <select name="Country" className="county"  onChange={(e) =>
              setFormData({ ...formData, Trainer: e.target.value })
            }  required>
  
{
trainer.map((item)=>(

<option>{item.Name}</option>



))




}
</select>
          <input
            type="text"
            className="form-group"
            placeholder="Remarks"
            required
         
            onChange={(e) =>
              setFormData({ ...formData, Remarks: e.target.value })
            }
          />
          <input
            type="text"
            className="form-group"
            placeholder="Sex"
            required
        
            onChange={(e) =>
              setFormData({ ...formData, Sex: e.target.value })
            }
          />
              <input
            type="text"
            placeholder="Color"
            required
            className="form-group"
            value={formData.Color}
            onChange={(e) =>
              setFormData({ ...formData, Color: e.target.value })
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
  );
};

export default LocationInfo;
