import React, { Component } from 'react';
import ProductListing from '../components/ProductListing';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './SearchLandingPage.css';
import {searchProduct} from '../services/SearchService';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class SearchLandingPage extends Component{
   constructor(props){
       super(props);
       this.state = {
           products: [],
           count: '',
           value: this.props.match.params.queryterm
       }
   }

   componentDidMount(){
       console.log("calling search")
       this.searchNow();
    }

    searchNow(){
        this.state.value = this.props.match.params.queryterm;
        searchProduct(this.state.value).then(result => this.setState({
            products: result,
            count: result.length
        }))
        this.print();
    }

    componentDidUpdate(){
        if(this.state.value != this.props.match.params.queryterm){
            console.log("value changed")
            this.searchNow();
        }
    }

    print(){
        console.log("product data: ")
        console.log(this.state.products.length);
        console.log("passed value from search: "+this.state.value)
    }
    
    render(){
        return(
            <>
            <div>
                    <div className="row">
        <h4 style={{margin:'6px', marginLeft: "100px"}}>{this.state.count} results found for {this.state.value}</h4>                
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
                        <div class="row row-cols-1 row-cols-md-4">
                            {
                                this.state.products.map((product) => (
                                    <ProductListing 
                                        productName={product.title} 
                                        productPrice = {product.salePrice} 
                                        productImage = {product.image}    >                                 
                                    </ProductListing>
                                ))
                            }
                            </div>
                        </div>
                </div>
            </>
        );
    }
}

export default withRouter(SearchLandingPage);

// export default SearchLandingPage;