import React, { createContext, useState, useEffect } from "react";

// Create UserContext
export const UserContext = createContext(null);

// UserProvider Component
export const UserProvider = ({ children }) => {
    const [userType, setUserType] = useState(localStorage.getItem("userType") || "default");

    // Save userType to localStorage when it changes
    useEffect(() => {
        localStorage.setItem("userType", userType);
    }, [userType]);

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserContext.Provider>
    );
};