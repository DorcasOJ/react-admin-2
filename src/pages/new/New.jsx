import "./new.css";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FormInput from "../../components/formInput/FormInput";
import { DriveFolderUploadOutlined } from "@mui/icons-material";


const New = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const [values, setValues] = useState();
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

  return (
    <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img
                      src= {
                        file 
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt="" 
                    />
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <label htmlFor="file">
                                Image: <DriveFolderUploadOutlined className="icon" />
                            </label>
                            <input
                             type="file"
                             id="file"
                             onChange={(e) => setFile(e.target.files[0])}
                             style={{ display: "none" }}
                            />
                        </div>
                       
                        {
                            inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))
                        }
                       
                        {/* {
                            inputs.map((input) => (
                                <FormInput 
                                    key={input.id}
                                    {...input}
                                    value={loginValues[input.name]}
                                    // onChange={onChange}
                              />
                            ))
                        } */}
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New