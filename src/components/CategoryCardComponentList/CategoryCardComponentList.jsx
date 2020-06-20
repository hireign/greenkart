import React from 'react';
import './CategoryCardComponentList.scss';
import  CategoryImage  from '../CategoryComponent/CategoryImage';

function CategoryCardComponentList(props) {
    console.log('CategoryCardComponentList :'+ JSON.stringify(props.data));
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
