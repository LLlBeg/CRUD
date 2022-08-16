import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AllUsers from "./component/AllUsers";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import NavBar from "./component/NavBar";
import NotFound from "./component/NotFound";
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
