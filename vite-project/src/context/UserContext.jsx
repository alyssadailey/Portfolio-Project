import React, { createContext, useState, useEffect } from "react";

// Create UserContext
export const UserContext = createContext(null);

// UserProvider Component
export const UserProvider = ({ children }) => {
    const [userType, setUserType] = useState(() => {
        const savedUser = localStorage.getItem("userType");
        return savedUser || "Default";
    });

    // Save userType to localStorage when it changes
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