import React from 'react'


//global object that is available whereever you want to put it
const authContext = React.createContext({
    authenticated: false, 
    login: () => {} 
});

export default authContext;