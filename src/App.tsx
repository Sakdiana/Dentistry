import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyPatients from "./pages/MyPatients";
import Income from "./pages/Income";
import Help from "./pages/Help";
import NotFoundPage from "./pages/NotFoundPage";
import ReservationDay from "./pages/Reservation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/mypatients" element={<MyPatients />} />
        <Route path="reservation" element={<ReservationDay />} />

        <Route path="/income" element={<Income />} />
        <Route path="/help" element={<Help />} />

        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
