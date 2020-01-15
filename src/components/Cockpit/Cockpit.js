import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {



    //takes a function that will run for every render cycle of Cockpit (virtual DOM)
    //can have as many as you want
    useEffect(() => {
      console.log('Cockpit.js useEffect');
      //Http...request
      setTimeout(() =>{
        alert('saved data to cloud!')
      }, 1000)
      //runs after the rendor cycle
      return () =>{
        console.log('Cockpit.js Cleanup work in useEffect');
      }
      //allows us to chose when this updates
      //have to pass an array, empty array only runs once
      //empty array means it runs when it unmounts
    }, []);


    useEffect(() => {
      console.log('Cockpit.js  2nd useEffect');
      return () => {
        console.log('Cockpit.js cleanup work in 2nd useEffect')
      }
    });
    


    //array of strings joined with the space
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(props.personLength <= 1) {
      assignedClasses.push(classes.bold);  //classes = ['red','bold'];
    }


    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>

            <p className={assignedClasses.join(' ')}>This is really working!</p>
            
            <button className={btnClass} onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

//React will memorize and only if it changes it will re render it
//good way for optimization with functional components
export default React.memo(cockpit);