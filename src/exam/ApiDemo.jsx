import React, { useEffect, useState } from "react";
import "./style.css";

const ApiDemo = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

  }, []);

  return (

    <div className="container">

      <h1 className="page-title">API Demo Users</h1>

      <table className="user-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default ApiDemo;