import React from 'react';
import './FooterComponent.scss';
import FooterContentComponent from './FooterContentComponet';

const Footer = () =>{
    return(
        <div className="footer-middle mt-5 bg-dark" >
        <div  style={{"height": "100%"}} className="container" >
        <div className="row">
       <FooterContentComponent></FooterContentComponent>
            </div>
            <div className=".footer-bottom ">
                <p className="text-center text-white">
                    &copy; GreenKart - All Right Served
                </p>
            </div>
            </div>
            </div>
    )
};

export default Footer;

