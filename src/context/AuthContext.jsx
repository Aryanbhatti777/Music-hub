import { createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState(() => {
        JSON.parse(localStorage.getItem("users")) || [];
    })

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;