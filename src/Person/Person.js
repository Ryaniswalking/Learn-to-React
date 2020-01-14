//dont need component cuz were not using a component just making a function
import React from 'react';
import styled from 'styled-components'
// import "./Person.css"

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;  
    }
`;


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
        <StyledDiv> 
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old ! {props.children}</p>
            {/* <p>{props.children}</p>    */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv> 
    )
}

export default person;