import React, {useEffect, useState} from "react";
import {AppContext} from "./AppContext";
import {toast} from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [credit, setCredit] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const loadCreditData = async () => {
        try {
            const {data} = await axios.get(`${backendUrl}/auth/credits`, {
                headers: {
                    Authorization: `Bearer ${token}`, // ✅ token send like this
                },
            });

            if (data.success) {
                setCredit(data.credit || 0);
                setUser(data.user || null);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const generateImage = async (prompt) => {
        try {
            const {data} = await axios.post(
                `${backendUrl}/img/generate-img`,
                {prompt},
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ token send like this
                    },
                }
            );

            if (data.success) {
                loadCreditData();
                return data.resultImage;
            } else {
                toast.error(data.message);
                loadCreditData();
                if (data.creditBalance === 0) {
                    navigate("/buy");
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
    };

    useEffect(() => {
        if (token) {
            loadCreditData();
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        credit,
        setCredit,
        token,
        setToken,
        loadCreditData,
        logout,
        generateImage,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
