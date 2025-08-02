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
import ReservationLayout from "./layouts/ReservationLayout";
import ReservationDay from "./pages/Reservation/ReservationDay";
import ReservationMonth from "./pages/Reservation/ReservationMonth";
import ReservationWeek from "./pages/Reservation/ReservationWeek";
import ReservationYear from "./pages/Reservation/ReservationYear";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/mypatients" element={<MyPatients />} />

        <Route path="/reservation" element={<ReservationLayout />}>
          <Route index element={<ReservationDay/>}/>
          <Route path="/reservation/month" element={<ReservationMonth/>}/>
          <Route path="/reservation/week" element={<ReservationWeek/>}/>
          <Route path="/reservation/year" element={<ReservationYear/>}/>

        </Route>

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
