import React from "react";
import {EmailContext} from '../App'
const ComponentD = () =>{
    return(
        <div>

            <EmailContext.Consumer>
                {(email) =>{
                    return <div>Email - {email}</div>;
                }}
            </EmailContext.Consumer>
            {/* <h1>{props.Email}</h1> */}
        </div>
    );
};

export default ComponentD;