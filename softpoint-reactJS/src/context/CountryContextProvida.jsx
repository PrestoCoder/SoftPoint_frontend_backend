import React, { useState } from "react";
import CountryContext from "./CountryContext";

/*
    This CountryContextProvider will be used as a wrapper over components.
    <CountryContextProvider>
        <Child component />
    </CountryContextProvider>

    The child component will be passed on as children parameter, and what will be returned will be
    a wrapped version of the component, wrapped in CountryContext.Provider.

    Thus, CountryContextProvider is kind of a wrapper function, such that it wraps the component and returns it.
*/

const CountryContextProvider = ({children}) => {
    // Let this data be something we'd fetch using fetchAPI.
    // Then we'll set the data using setData.
    // And we'll pass the data to children components using value parameter.
    const [country, setCountry] = useState('PK');
    const [isDropVis, setIsDropVis] = useState(false);

    const combinedState = {
        country, setCountry, isDropVis, setIsDropVis
    }

    return (
        <CountryContext.Provider value = {combinedState}>
            {children}
        </CountryContext.Provider>
    )
}
 
 export default CountryContextProvider