import React, { Component } from 'react';
import './LoginComponent.scss';
import ProfileComponent from './ProfileComponent';
import SignInFormComponent from './SignInFormComponent';

class LoginComponent extends Component {
    constructor(props){
        super();
        this.state = {
            "userEmailId":"",
            "userPassword":""
        }
    }

    onEmailChange = (e) =>{
       this.setState({userEmailId: e.target.value}) 
    }

    onPasswordChange = (e) =>{
        this.setState({userPassword: e.target.value}) 
     }


    onFormSubmit =  e => {
        e.preventDefault();
        console.log('Password length'+ this.state.userPassword);
        if(this.state.userPassword.length<5){
            alert('Password should be of at least 5 characters')
        }
        else{
            console.log('Matched URL'+this.props.match.url);
            this.props.history.push('/')
        }
    
    }

    render() { 
        const { userEmailId} = this.state;
        console.log('Email: '+ userEmailId);
        return (
            <div className='row mb-4'>
            <div className='login col-lg-4' style={{"padding-right": "40px"}}>
                <div className="card mr-1 mt-5 bg-dark  ">
                <ProfileComponent></ProfileComponent>
                    <div className="card-body">
                    <SignInFormComponent onFormSubmit={this.onFormSubmit} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange}  {...this.state}></SignInFormComponent>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
 


export default LoginComponent;