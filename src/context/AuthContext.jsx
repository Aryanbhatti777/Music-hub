import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    let user = JSON.parse(localStorage.getItem("user")); 
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

    const Login = (data) => {
        const find = users.find(user => (user.email === data.email || user.username === data.username) && user.password === data.password)

        if (!find) {
            toast.error("Invalid credentials")
            return
        }

        user = find
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user));
        return toast.success("Logged in successfully");

    }

    return (
        <AuthContext.Provider value={{user, Register, role, setRole, Login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;