import React from "react";
import ComponentC from './ComponentC'
const ComponentB = (props) =>{
    return(
        <div>
            <ComponentC Email = {props.Email}/>
        </div>
    );
};

export default ComponentB;