import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Aside from "./components/Aside";
import Dashboard from "./pages/Dashboard";
import MyPatients from "./pages/MyPatients";
import Reservation from "./pages/Reservation";
import Posts from "./pages/Posts";
import Income from "./pages/Income";
import Help from "./pages/Help";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mypatients" element={<MyPatients />} />
        <Route path="/posts" element={<Posts />} />

        <Route path="/reservation" element={<Reservation />} />
        <Route path="/income" element={<Income />} />
        <Route path="/help" element={<Help />} />
        



       
        
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
