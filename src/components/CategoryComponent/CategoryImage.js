import React from 'react';
import classes from '../CategoryComponent/CategoryImage.module.css';
import {Link} from 'react-router-dom';

const categoryImage = (props) => (
    <div 
        className={classes.CategoryImage}
        style = {{ backgroundImage: `url(${props.img})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
        <Link to='/search/product'>
            <button>{props.heading}</button>
        </Link>
    </div>
);

export default categoryImage;