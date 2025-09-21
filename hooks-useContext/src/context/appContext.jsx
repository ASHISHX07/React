import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {

    const Phone = "+911234567890"
    const name = "Ashish"

    return(
        <AppContext.Provider value={{Phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider