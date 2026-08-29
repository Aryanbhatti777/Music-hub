import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null); 
    const users = JSON.parse(localStorage.getItem("users")) || []
    const [role, setRole] = useState("listener");


    const Register = (data) => {
        const exists = users.find(user => user.email === data.email || user.username === data.username);

        if (exists) {
            toast.error("User already exists");
            return;
        }

        users.push({ ...data, role });
        localStorage.setItem("users", JSON.stringify(users));

        return toast.success("Registered.. Now login");
    }

    return (
        <AuthContext.Provider value={{user, setUser, Register, role, setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;