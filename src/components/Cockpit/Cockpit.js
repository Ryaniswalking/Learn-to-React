import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

    //ref with hooks, focus is with the render
    //executes after with the useEffect()
    const toggleBtnRef = useRef(null);
    


    //takes a function that will run for every render cycle of Cockpit (virtual DOM)
    //can have as many as you want
    useEffect(() => {
      console.log('Cockpit.js useEffect');
      //Http...request
      // setTimeout(() =>{
        
      // }, 1000)
      //runs after the rendor cycle

      toggleBtnRef.current.click();

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
            
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons
            </button>

            <AuthContext.Consumer>
              {context => <button onClick = {context.login}>Log In</button>}
            </AuthContext.Consumer>
        </div>
    );
};

//React will memorize and only if it changes it will re render it
//good way for optimization with functional components
export default React.memo(cockpit);