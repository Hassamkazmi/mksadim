import { motion } from "framer-motion";
import { toast } from "react-toastify";
const SignUp = ({ formData, setFormData, page, setPage, x, setX }) => {
  const handleNext = () => {
   
   setPage(page+1)
   setX(1000)
   
     if (
       formData.NameEn !== null &&
       formData.Age !== null &&
       formData.NameAr !== null 
   
    
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
            placeholder="NameEn"
            required
            className="form-group"
      value={formData.NameEn}
            onChange={(e) =>
              setFormData({ ...formData, NameEn: e.target.value })
            }
          />
       
          <input
            type="number"
            className="form-group"
            placeholder="Age"
            required
            value={formData.Age}
            onChange={(e) => setFormData({ ...formData, Age: e.target.value })}
          />
          <input
            type="text"
            className="form-group"
            placeholder="Name Ar"
            required
        value={formData.NameAr}
            onChange={(e) =>
              setFormData({ ...formData, NameAr: e.target.value })
            }
          />
        </div>
        
      </div>
      <div className="container btndiv">
        <button onClick={handleNext}>Next</button>
      </div>
    </motion.div>
  );
};

export default SignUp;
