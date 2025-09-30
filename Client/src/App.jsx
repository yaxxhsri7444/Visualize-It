import React, {useContext} from "react";
import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import Result from "./pages/result";
import Buycredit from "./pages/Buycredit";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import {ToastContainer} from "react-toastify";
import { AppContext } from "./context/appContext.js";

const App = () => {
    const {showLogin} = useContext(AppContext);
    return (
        <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
            <ToastContainer position="bottom-right" />
            <Navbar />
            {showLogin && <Login />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Result />} />
                <Route path="/buy" element={<Buycredit />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
