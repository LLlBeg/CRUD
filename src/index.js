import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<AllUsers />} />
      <Route path="/user/create" element={<AddUser />} />
      <Route path="/user/:id" element={<EditUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
