import React from 'react';


const UnorderListComponent = (props) =>{
    return(
        <ul className="list-unstyled text-white">{
            props.data.map((listData) => <li>{listData}</li>)
        }        
    </ul>
    )
};


export default UnorderListComponent;