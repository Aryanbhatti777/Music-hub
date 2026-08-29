import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null); 
    const users = JSON.parse(localStorage.getItem("users")) || []
    const [role, setRole] = useState("listener");


    

    return (
        <AuthContext.Provider value={{user, setUser, Register, role, setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;