//dont need component cuz were not using a component just making a function
import React, {Component} from 'react';
import classes from"./Person.css"



class Person extends Component{
    render(){
        console.log("Person.js Rendering...");
        return (
        
            // <div className="Person" style={style}>
            <div className={classes.Person}> 
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old ! {this.props.children}</p>
                {/* <p>{props.children}</p>    */}
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div> 
        )
    }
}


export default Person;





//function name should be the same name as component
// const person = (props) => {
   
//     console.log('Persons.js rendering...');

//     return (
        
//         // <div className="Person" style={style}>
//         <div className={classes.Person}> 
//             <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old ! {props.children}</p>
//             {/* <p>{props.children}</p>    */}
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div> 
//     )
// }

// export default person;