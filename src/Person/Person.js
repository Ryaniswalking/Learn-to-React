//dont need component cuz were not using a component just making a function
import React from 'react';
import classes from"./Person.css"




//function name should be the same name as component
const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '400px'
    //     }
    // };


    //X is some random number
    //cannot define classes, can only call functions

 

    return (
        
        // <div className="Person" style={style}>
        <div className={classes.Person}> 
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old ! {props.children}</p>
            {/* <p>{props.children}</p>    */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div> 
    )
}

export default person;