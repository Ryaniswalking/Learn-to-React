import React from 'react';

// const withClass = props => (
//     //sets up a class on a div that wraps the component
//     //you wrap components around other components that add something to it
//     //additional styling or logic
//     <div className={props.classes}>{props.children}</div>
// );


//another way to create an HOC
const withClass = (WrappedComponent, className) => {
    //function that returns a functional component
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};
   



export default withClass;