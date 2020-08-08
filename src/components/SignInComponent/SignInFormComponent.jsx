import React from 'react';
import SignInInputComponent from './SignInInputComponent';
import {Link} from 'react-router-dom';

const SignInFormComponent = (props) =>{
    return(
        <form onSubmit={props.onFormSubmit}>
        <SignInInputComponent imgType="fa fa-user " inputType="email" placeholder="Email" onInputChange={props.onEmailChange} ></SignInInputComponent>
        <SignInInputComponent imgType="fa fa-lock " inputType="password" placeholder="Password" onInputChange={props.onPasswordChange}></SignInInputComponent>
        <div className="d-flex flex-row mt-2 ml-2">
        <button type='submit' className="btn btn-light ">LOGIN</button>
        </div>
        <div  style={{"padding":"10px", "display": "flex", "justifyContent": "space-between"}}>
        <Link to='/forgotpassword'>
        <span className="pull-left"  style={{"color": "#e8226b",
        "outline": "medium none",
        "overflow": "hidden",
        "cursor": "pointer"}}>Forgot Password?</span>
        </Link>
        <Link to='/signup'>
        <span className="pull-right" style={{"float":"right", "color": "white"}}> Create Account</span>
            </Link>
        </div>
        
    </form>
    )
};



export default SignInFormComponent;