//dont need component cuz were not using a component just making a function
import React from 'react';

import "./Person.css"



//function name should be the same name as component
const person = (props) => {
    //X is some random number
    //cannot define classes, can only call functions
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old ! {props.children}</p>
            {/* <p>{props.children}</p>    */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;