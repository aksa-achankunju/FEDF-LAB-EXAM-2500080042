import { useState } from "react";

function Registration() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    course: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered");

  };

  return (

    <div className="container">

      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Name" onChange={handleChange} />

        <input name="email" placeholder="Email" onChange={handleChange} />

        <input name="phone" placeholder="Phone" onChange={handleChange} />

        <input name="age" placeholder="Age" onChange={handleChange} />

        <input name="city" placeholder="City" onChange={handleChange} />

        <input name="course" placeholder="Course" onChange={handleChange} />

        <button type="submit">Register</button>

      </form>

    </div>

  );

}

export default Registration;