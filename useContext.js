//-------------------------------------------------------------------------------------
//useContext

import { useState, createContext, useContext } from "react";
const UserContext = createContext();

return (
    <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
    </UserContext.Provider>
);


//From nested Component
const user = useContext(UserContext);
return (
    <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
    </>
);
