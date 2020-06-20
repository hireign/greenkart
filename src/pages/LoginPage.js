import React, { Component } from 'react';
import LoginForm from '../Forms/LoginForm';
import './LoginPage.css';

class LoginPage extends Component{
    
    render(){
        return(
            <>
            <div className="root">
                <h1>Login</h1>
                <div className="form" >
                    <LoginForm/>
                    <br></br>
                    <span>Don't have an account? <a href="/signup">Sign up</a></span>
                </div>
                <div className="greeting">
                    <h4>How are you doing today?</h4>
                    <span>We are happy to have you on our team of gardeners, home planters, and tree-huggers!</span>
                </div>
            </div>
            </>
        );
    }
}

export default LoginPage;