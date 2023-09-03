/* eslint-disable react/prop-types */
import React ,{ useContext } from "react";

const CounterContext=React.createContext()

const CounterContextProvider = ({children}) => {

    let greeting="hello from context"
    
    return  <CounterContext.Provider value={{
        greeting,
    }}>
        {children}
    </CounterContext.Provider>

}

export const useCounterContext = ()=>{
    return useContext(CounterContext)
}

export   {CounterContextProvider}