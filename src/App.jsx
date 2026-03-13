import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./exam/NavBar";
import Home from "./exam/Home";
import Registration from "./exam/TeacherRegistration";
import UserList from "./exam/Teacherlist";
import ApiDemo from "./exam/ApiDemo";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/api" element={<ApiDemo />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;