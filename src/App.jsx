import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./exam/NavBar";
import Home from "./exam/Home";
import Registration from "./exam/Registration";
import UserList from "./exam/UserList";
import ApiDemo from "./exam/ApiDemo";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/registration" element={<Registration />} />

        <Route path="/users" element={<UserList />} />

        <Route path="/api" element={<ApiDemo />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;