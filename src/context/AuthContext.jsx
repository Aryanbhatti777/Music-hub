import { createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [role, setRole] = useState("listener");


    const Register = (data) => {
        const exists = users.find(user => user.email === data.email || user.username === data.username);

        if (exists) {
            toast.error("User already exists");
            return;
        }

        const updatedUsers = [...users, { ...data, role }];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));



        return toast.success("Registered.. Now login");


    }

    const Login = (data) => {
        const find = users.find(user => (user.email === data.email || user.username === data.username) && user.password === data.password)

        if (!find) {
            toast.error("Invalid credentials")
            return
        }

        setUser(find)
        localStorage.setItem("user", JSON.stringify(find));
        return toast.success("Logged in successfully");

    }

    return (
        <AuthContext.Provider value={{ user, Register, role, setRole, Login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;