import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Devices from "./pages/devices/Devices";
import Events from "./pages/events/Events";
import More from "./pages/more/More";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Synthetic from "./pages/synthetic/Synthetic";
import Users from "./pages/users/Users";
import App from "./App";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="devices" element={<Devices />} />
      <Route path="events" element={<Events />} />
      <Route path="more" element={<More />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="synthetic" element={<Synthetic />} />
      <Route path="users" element={<Users />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
