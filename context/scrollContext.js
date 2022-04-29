import { createContext, useRef, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = (props) => {

     const aboutRef = useRef(null);

     const contactRef = useRef(null);
   
    
    

    
    return (
        <ScrollContext.Provider value={{ 
            aboutRef,
            contactRef,
            
         }}>
        {props.children}
        </ScrollContext.Provider>
    );
    }
