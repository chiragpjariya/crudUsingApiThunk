import { createContext, useContext, useState } from "react";

const Data = createContext()


export const DataProvider = ({ children }) => {
    const [list, setList] = useState([
        
    ])
    return (
        <Data.Provider value={{ list, setList }}>
            {children}
        </Data.Provider>
    )
}

export function useData() {
    return useContext(Data)
}


