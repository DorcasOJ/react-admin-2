import "./login.css";
// import inputs from "../../utils/inputFormat";
// import { userInputs } from "../../utils/formSource";
import FormInput from "../../components/formInput/FormInput";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import LoginChart from "../../components/loginChart/LoginChart";


const Login = ({title, userInputs}) => {
  // const { dispatch } = useContext(DarkModeContext);

  const [loginValues, setLoginValues] = useState({})

  // console.log(loginValues)
  const handleSubmit = (e) => {
    e.preventDefault;
  }

  const onChange = (e) => {
    setLoginValues({...loginValues, [e.target.name]: e.target.value});
  }

  return (
    <div className="login">
      <div className="top">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>

      <div className="center">
        
        <div className="right">
          <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <div className="inputs">
              {
                userInputs.map((input) => (
                  <FormInput 
                    key={input.id}
                    {...input}
                    value={loginValues[input.name]}
                    onChange={onChange}
                  />
                ))
              }
            </div>
            { 
              title==="Login" &&
              <>
              <span className="forgotPasswordSpan">
                <Link to="/" className="forgotPasswordLink">Forgot password?</Link>
              </span>
              <button>Login</button>
            
              <span className="registerSpan">
                Not a member? &nbsp;
                <Link to="/register" className="registerLink">Register</Link>
              </span>
              </>
            }
           

            {
              title ==="Register" && 
              <>
                <button>Register</button>
                <span className="loginSpan">
                  Already a member? &nbsp;
                  <Link to="/login" className="loginLink">Login</Link>
                </span>
              </>
            }

          </form>
        </div>
        
        <div className="left">
          <LoginChart />
        </div>

        
      </div>
     
    </div>
  )
}

export default Login