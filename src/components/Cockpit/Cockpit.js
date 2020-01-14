import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {




    //array of strings joined with the space
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red;
    }
    
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);  //classes = ['red','bold'];
    }


    return(
        <div className={classes.Cockpit}>
            <h1>Hi my name is Ryan</h1>

            <p className={assignedClasses.join(' ')}>This is really working!</p>
            
            <button className={btnClass} onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;