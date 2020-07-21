import React from 'react';
import SignInInputComponent from './SignInInputComponent';

const SignUpFormComponent = (props) =>{
    return(
        <form onSubmit={props.onFormSubmit}>
        <SignInInputComponent imgType="fa fa-user " placeholder="Username" onInputChange={props.onUsernameChange} ></SignInInputComponent>
        <SignInInputComponent imgType="fa fa-user " inputType="email" placeholder="Email" onInputChange={props.onEmailChange} ></SignInInputComponent>
        <SignInInputComponent imgType="fa fa-lock " inputType="password" placeholder="Password" onInputChange={props.onPasswordChange}></SignInInputComponent>
        <div className="d-flex flex-row mt-2 ml-2">
        <button type='submit' className="btn btn-light ">Create</button>
        </div>
    </form>
    )
};



export default SignUpFormComponent;