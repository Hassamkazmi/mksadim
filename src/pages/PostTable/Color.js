import React,{useState} from 'react'
import swal from 'sweetalert';
import axios from 'axios';

const Color = () => {
  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState("");
const [shortCode,setshortCode]= useState("") 





  const submit = async (event) => {

    event.preventDefault();
    try {
      const formData = new FormData();
     
      formData.append("NameEn", NameEn);
      FormData.append("NameAr" , NameAr)
formData.append("shortCode",shortCode);

await axios.post(`${window.env.API_URL}/CreateColor`, formData)
      swal({
        title: "Success!",
        text: "Data has been added successfully ",
        icon: "success",
        button: "OK",
      });

    
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="page">
   
    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <div className="Headers">Create Color</div>
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


            <div className='ButtonSection ' style={{justifyContent:"end"}}>
     

              <button type='submit' className='SubmitButton'>Add Color</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Color