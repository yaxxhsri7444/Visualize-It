import React, {useState} from "react";
import {AppContext} from "./appContext.js";

const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [credit, setCredit] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                showLogin,
                setShowLogin,
                backendUrl,
                credit,
                setCredit,
                token,
                setToken,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
