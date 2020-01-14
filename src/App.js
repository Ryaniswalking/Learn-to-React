import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';






//one of the way to create a react componenet
class App extends Component {
  //only available for components, but also for hooks
  state = {
    persons: [
      { id: 'asedf', name: 'Ryan', age: 24},
      { id: 'fds', name: 'James', age: 69},
      { id: 'dsff',name: 'Walker', age: 420}
    ],
    otherState: 'some other value',
    showPersons: false 
  }



  //handler for then someone inputs in the input
  nameChangedHandler = (event, id) => {

    //find() finds the perosn in the array
    //findIndex find the index of that person
    //base the index on the key/id of the person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //JS object that hold the individual person 
    //based on which input
    const person = {
      ...this.state.persons[personIndex]
    };

    //Name of the person is what is being changed
    person.name = event.target.value;

    //copy of the array of all the person=s
    const persons = [...this.state.persons];

    //changes name of person based on the specific index
    persons[personIndex] = person;

    this.setState({persons: persons});
} 



  deletePersonHandler = (personIndex) =>{
    //create a copy of the array
    //alway update the state in an immutable fashion
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]

    //removes the element from the array
    persons.splice(personIndex, 1);
    //then changes the state
    this.setState({persons: persons});
  }


  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  //React called rendor to display to the screen
  render() {

   

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* map converts every element in an array to something else */}
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
    
        </div> 
      );
      //toggle the color of the button to red after clicked
      btnClass = classes.Red;
    }

    //array of strings joined with the space
    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);  //classes = ['red','bold'];
    }

    return (
      
        <div className={classes.App}>
          <h1>Hi my name is Ryan
          </h1>

        
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          

          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons
          </button>

          {/* if toggled then show persons from the template */}
          {persons}
          
        
        </div>
     
      
    );

    //method that takes at least 3 arguments
    //first one renders to the dom, could be div or component
    //second is the configuration 
    //third is any amound of children (what is nested in the div)
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "does this work now!") ); 
  }
}

//higher order componenet
//component wrapping your componenent which adds more functionality
export default App;
