import { createContext, useContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Define the UserContextProvider component
export function UserContextProvider({ children }) {
    // Initialize the userList state
    const [userList, setUserList] = useState([
        { name: "chirag", email: "cj@gmail.com", password: "123456" }
    ]);

    // Provide the state value and updater function to context
    return (
        <UserContext.Provider value={{ userList, setUserList }}>
            {children}
        </UserContext.Provider>
    );
}

// Custom hook to use the UserContext
export function useUserContext() {
    return useContext(UserContext);
}
