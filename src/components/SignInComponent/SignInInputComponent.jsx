import React from "react";
import LoginImageTypeComponent from './LoginImageTypeComponent';

const SignInInputComponent = (props) => {
  
  const imgType = props.imgType
  return (
    <div className="input-group mb-3">
    <div className="input-group-prepend">
    <LoginImageTypeComponent imgageType={imgType}></LoginImageTypeComponent>
    </div>
      <input
        type={props.inputType}
        className="form-control py-4 "
        placeholder={props.placeholder}
        required
        onChange={props.onInputChange}
      ></input>
    </div>
  );
};



export default SignInInputComponent;
