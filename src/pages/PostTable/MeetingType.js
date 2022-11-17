
import React,{useState} from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const MeetingType = () => {
    const [NameEn, setNameEn] = useState("");
    const [NameAr, setNameAr] = useState("");
    const [shortCode,setshortCode]= useState("") 
  
  const history =useNavigate()
  
  
  
    const submit = async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append("NameEn", NameEn);
        formData.append("NameAr" , NameAr)
        formData.append("shortCode",shortCode);
  
        await axios.post(`${window.env.API_URL}/uploadMeetingType`, formData)
        swal({
          title: "Success!",
          text: "Data has been added successfully ",
          icon: "success",
          button: "OK",
        });
        history('/getmeeting')
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



  return (
    <div className="page">
   
    <div className="rightsidedata">
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <div className="Headers">Create Meeting Type</div>
        <div className="form">
          
          <form onSubmit={submit}>
            <div className="row mainrow">
              <div className="col-sm">
               
                <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
onChange={(e) => setNameEn(e.target.value)}
                  name="Name"
                  value={NameEn}
> 
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
                
                
                <span className="spanForm"> |</span>
              </div>

              <div className="col-sm">
           
                       <FloatingLabel
        controlId="floatingInput"
        label="اسم"
        className="mb-3"
onChange={(e) => setNameAr(e.target.value)}
                  name="Name"
                  value={NameAr}
                  style={{ direction: "rtl" }}
               
             
> 
        <Form.Control type="text" placeholder="اسم"     style={{ direction: "rtl" }}/>
      </FloatingLabel>
              </div>
            </div>

            <div className="row mainrow">
              <div className="col-sm">
          
                
                <FloatingLabel
        controlId="floatingInput"
        label="Short Code"
        className="mb-3"
        onChange={(e) => setshortCode(e.target.value)}
        value={shortCode}
                 
               
             
> 
        <Form.Control type="text" placeholder="Short Code"     />
      </FloatingLabel>
                
                <span className="spanForm"> |</span>
              </div>

              <div className="col-sm">
              <FloatingLabel
        controlId="floatingInput"
        label="اسم"
        className="mb-3"

                  style={{ direction: "rtl" }}
               
             
> 
        <Form.Control type="text" placeholder="اسم"     style={{ direction: "rtl" }}/>
      </FloatingLabel>
              </div>
            </div>


            <div className='ButtonSection ' style={{justifyContent:"end"}}>
     

              <button Name='submit' className='SubmitButton'>Add Meeting</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MeetingType