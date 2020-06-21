import React, { Component } from 'react';
import ProductListing from '../components/ProductListing';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './SearchLandingPage.css'

class SearchLandingPage extends Component{
   
    render(){
        return(
            <>
            <div>
                    <div className="row">
                        <h4 style={{margin:'6px', marginLeft: "100px"}}>12 results found for "search term"</h4>                
                            <Formik>
                                <Field name="sort" as="select" style={{width:150, marginLeft:"100px", marginTop: "8px", marginBottom: '8px'}}>
                                    <option value="Featured">Featured</option>
                                    <option value="Price low to high">Price low to high</option>
                                    <option value="Price high to low">Price high to low</option>
                                    <option value="Recommended">Recommended</option>
                                </Field>
                            </Formik>
                            <Formik>
                                <Field name="category" as="select" style={{width:150, marginLeft:"20px", marginTop: "8px", marginBottom: '8px'}}>
                                    <option value="Plants">Plants</option>
                                    <option value="Seeds">Seeds</option>
                                    <option value="Flowers">Flowers</option>
                                    <option value="Tools">Tools</option>
                                </Field>
                            </Formik>
                    </div>
                    <div className="productListing">
                        <ProductListing/>
                    </div>
                </div>
            </>
        );
    }
}

export default SearchLandingPage;