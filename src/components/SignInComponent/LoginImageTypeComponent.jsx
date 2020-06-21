import React from "react";

const LoginImageTypeComponent = (props) =>{
    console.log('Inside image'+ props.imgageType)
    return(
        <span className="input-group-text">
        <i className={props.imgageType}></i>
       </span>
  )};

  export default LoginImageTypeComponent;

