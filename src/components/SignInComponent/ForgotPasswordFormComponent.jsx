import React from 'react';
import SignInInputComponent from './SignInInputComponent';

const ForgotPasswordFormComponent = (props) =>{
    return(
        <form onSubmit={props.onFormSubmit}>
        <SignInInputComponent imgType="fa fa-user " inputType="email" placeholder="Email" onInputChange={props.onEmailChange} ></SignInInputComponent>
        <div className="d-flex flex-row mt-2 ml-2">
        <button type='submit' className="btn btn-light btn-group-justified">Submit</button>
        </div>
    </form>
    )
};



export default ForgotPasswordFormComponent;