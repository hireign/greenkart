import React, { Component } from 'react';
import ContactUsForm from '../Forms/ContactUsForm';
import './ContactUsPage.css';

class ContactUsPage extends Component{
    
    render(){
        return(
            <>
            <div className="root" style={{marginBottom:"600px"}}>
                <h1>Contact Us</h1>
                <div className="form" >
                    <ContactUsForm/>
                    <br></br>
                </div>
                <div className="greeting">
                    <h4>What can we help you with?</h4>
                    <span>Send us your query and our team will be with you, right away!</span>
                </div>
            </div>
            </>
        );
    }
}

export default ContactUsPage;