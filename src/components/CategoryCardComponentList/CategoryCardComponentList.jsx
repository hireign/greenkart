import React from 'react';
import './CategoryCardComponentList.scss';
import  CategoryImage  from '../CategoryComponent/CategoryImage';

function CategoryCardComponentList(props) {
    return  (
        <div  className='categoryList '>
            {
                props.data.map(({id, ...restProps}) => (
                    <CategoryImage key={id} {...restProps}></CategoryImage> 
                ))
            }
        
       </div>
    
    )
 
}  

export default CategoryCardComponentList;
