import React,{useState,useEffect} from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Tracklengthform = () => {
  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState("");
  const [shortCode,setshortCode]= useState("") 
  const [image, setImage] = useState()
  const [preview, setPreview] = useState();

const history =useNavigate()



  const submit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("NameEn", NameEn);
      formData.append("NameAr" , NameAr)
      formData.append("shortCode",shortCode);

      await axios.post(`${window.env.API_URL}/uploadSex`, formData)
      swal({
        title: "Success!",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
      });
      history('/genderlist')
    } catch (error) {
      const err = error.message;
      swal({
        title: "Error!",
        text: err,
        icon: "error",
        button: "OK",
      });
    }
  };
  const onSelectFile = (e) => {
    setImage(e.target.files[0]);
  };
  useEffect(() => {
    if (!image  ) {
      setPreview(undefined);
      return;
    
    }
    if (!image.name.match(/\.(gif)$/)) {
   alert('select valid image.');
 return;

    }


    
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  return (
<div className="page">
   
   <div className="rightsidedata">
     <div
       style={{
         marginTop: "30px",
       }}
     >
       <div className="Headers">Create Track Length</div>
       <div className="form">
         
         <form onSubmit={submit}>
           <div className="row mainrow">
             <div className="col-sm">
               <input
                 placeholder=" Name"
                 onChange={(e) => setNameEn(e.target.value)}
                 name="Name"
                 value={NameEn}
                 required
               ></input><span className="spanForm"> |</span>
             </div>

             <div className="col-sm">
               <input
                 style={{ direction: "rtl" }}
                 placeholder="اسم "
                 onChange={(e) => setNameAr(e.target.value)}
                 name="Name"
                 value={NameAr}
               ></input>
             </div>
           </div>

           <div className="row mainrow">
             <div className="col-sm">
               <input
                 placeholder="Short Code"
                 name="Detail"
                 onChange={(e) => setshortCode(e.target.value)}
                 value={shortCode}
               ></input><span className="spanForm"> |</span>
             </div>

             <div className="col-sm">
               <input
                placeholder="التفاصيل"  style={{ direction: "rtl" }} 
                 name="Detail"
        
           
               ></input>
             </div>
           </div>


           <div className="ButtonSection">
                  <div>
                    <input
                      type="file"
                      onChange={onSelectFile}
                      className="formInput"
                    />
                    {image && (
                      <img src={preview} alt="" className="PreviewImage" />
                    )}
                  </div>

                  <button type="submit" className="SubmitButton">
                    Add Track Length
                  </button>
                </div>
         </form>
       </div>
     </div>
   </div>
 </div>
  )
}

export default Tracklengthform;