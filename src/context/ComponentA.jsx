import React from "react";
import ComponentB from './ComponentB'
const ComponentA = (props) =>{
    return(
        <div>
            <ComponentB Email = {props.Email}/>
        </div>
    );
};

export default ComponentA;