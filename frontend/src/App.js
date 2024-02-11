import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Orders from "./components/Orders";
import Medicines from "./components/Medicines";
import Volunteer from "./components/Volunteer";
import Profile from "./components/Profile";
import Hospitals from "./components/Hospitals";
import Inventory from "./components/Inventory";
import DiseasePredictions from "./components/DiseasePredictions";
import Braintumor from "./components/brainTumor";
import Navbar from "./components/Navbar";
import Hnavbar from "./components/Hnavbar";
import Pneumonia from "./components/Pneumonia";
import { LandingPage } from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Users from "./components/Users";
import Analytics from "./components/Analytics";
import Subscribe from "./components/Subscribe";
import UserProfile from "./components/UserProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./components/UserContext";
import GeneralPredict from "./components/GeneralPredict";
import Chatbot from "./components/Chatbot";
import FilterOrders from "./components/FilterOrders";


function App() {
  const [showvNavbar, setShowvNavbar] = useState(false);
  const handleShowvNavbar = () => {
    setShowvNavbar(!showvNavbar);
  };

  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <Navbar
            handleShowvNavbar={handleShowvNavbar}
            showvNavbar={showvNavbar}
          />
          <Hnavbar handleShowvNavbar={handleShowvNavbar} />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/analytics" element={<Analytics />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/donate-medicines" element={<Donate />}></Route>
            <Route path="/filter-orders" element={<FilterOrders />}></Route>
            {/* <Route path="/request-medicines" element={<Request />}></Route> */}
            <Route path="/medicines" element={<Medicines />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/disease-predictions" element={<DiseasePredictions />} ></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/user/:id" element={<UserProfile />}></Route>
            <Route path="/user" element={<UserProfile />} />
            <Route path="/users" element={<Users />}></Route>
            <Route path="/volunteer" element={<Volunteer />}></Route>
            <Route path="/search-medicines" element={<Inventory />}></Route>
            <Route path="/nearby-hospitals" element={<Hospitals />}></Route>
            <Route path="/brainTumor" element={<Braintumor />}></Route>
            <Route path="/Pneumonia" element={<Pneumonia />}></Route>
            <Route path="/subscribe" element={<Subscribe />}></Route>
            <Route path="/chatbot" element={<Chatbot />}></Route>
          </Routes>
          <ToastContainer theme="light" />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
