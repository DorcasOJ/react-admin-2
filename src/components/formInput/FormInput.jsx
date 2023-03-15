// import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
    const {id, errorMessage, value, onChange, label,  ...inputProps} = props
  return (
    <div className="formInput">
        <label>{label}</label>
        <input 
          {...inputProps}
          onChange={onChange}
          // value={value}
        />
        {
          errorMessage &&
          <span>{errorMessage}</span>
        }
    </div>
  )
}

export default FormInput