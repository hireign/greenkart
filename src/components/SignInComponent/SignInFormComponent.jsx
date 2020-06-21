import React from 'react';
import SignInInputComponent from './SignInInputComponent';

const SignInFormComponent = (props) =>{
    return(
        <form onSubmit={props.onFormSubmit}>
        <SignInInputComponent imgType="fa fa-user " inputType="email" placeholder="Email/Username" onInputChange={props.onEmailChange} ></SignInInputComponent>
        <SignInInputComponent imgType="fa fa-lock " inputType="password" placeholder="Password" onInputChange={props.onPasswordChange}></SignInInputComponent>
        <div className="d-flex flex-row mt-2 ml-2">
        <button type='submit' className="btn btn-success ">LOGIN</button>
    
        <button type='submit' className="btn btn-primary ml-4" text-right>GOOGLE SIGNIN</button>
        </div>
        <div  style={{"padding":"10px"}}>
        <span  onClick={()=>alert('Forgot Password Clicked')} style={{"color": "#e8226b",
        "outline": "medium none",
        "overflow": "hidden",
        "text-decoration": "none",
        "cursor": "pointer"}}>Forgot Password?</span>
            <span onClick={()=>alert('Create Account Clicked')} style={{"float":"right", "color": "white"}}> Create Account</span>
        </div>
        
    </form>
    )
};



export default SignInFormComponent;