import { createContext, useState } from "react";

// Create UserContext
let UserContext = createContext();

// Define the UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Export UserContext as default
export default UserContext;
