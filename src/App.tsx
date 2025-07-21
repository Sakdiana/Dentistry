import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import PrivateLayout from "./layouts/PrivateLayout";
import Aside from "./components/Aside";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<PrivateLayout />}>
        
    //     <Route path="/auth" element={<Auth />} />
    //     <Route path="/login" element={<Login />} />

        
    //   </Route>
    // </Routes>

    <Aside/>
  );
}

export default App;
