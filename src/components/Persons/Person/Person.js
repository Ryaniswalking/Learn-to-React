//dont need component cuz were not using a component just making a function
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from"./Person.css";
import Aux from '../../../HOC/Auxiliary';
import withClass from '../../../HOC/WithClass';


class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    //selects the last input that rendors
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log("Person.js Rendering...");
        return (
        
            // <div className="Person" style={style}>
            <Aux>
                <p key="i1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old ! {this.props.children}</p>
                <p key='i2'>{this.props.children}</p>    
                <input 
                    key='i3' 
                    // ref={(inputEl)=>{this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );       
            
    }
}

//react will watchout for and give warning if you give wrong prop
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);





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