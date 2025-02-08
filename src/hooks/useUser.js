import { useState } from "react";

const userUser = () => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return { user, login, logout };
}