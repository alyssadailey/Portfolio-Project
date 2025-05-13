import React, { createContext, useState, useEffect } from "react";

// Creates a global context so you can store and access the selected user type from anywhere in the app
export const UserContext = createContext(null);

// UserProvider Component- wraps app and shares userType and setUserType with all child components
export const UserProvider = ({ children }) => {
    const [userType, setUserType] = useState(() => {
        // Check localStorage for saved userType
        const savedUser = localStorage.getItem("userType");
        // If it exists, return it; otherwise, return a default value
        return savedUser || "Default";
    });

    // A hook to save userType to localStorage when it changes to ensure it persists across page reloads
    useEffect(() => {
        if (userType) {
            console.log("Saving userType:", userType);
            localStorage.setItem("userType", userType);
        }
    }, [userType]);

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserContext.Provider>
    );
};