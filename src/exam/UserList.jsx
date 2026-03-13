import React, { useEffect, useState } from "react";

const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const savedUsers =
      JSON.parse(localStorage.getItem("customerRegistrations")) || [];

    setUsers(savedUsers);

  }, []);

  return (

    <div className="container">

      <h1 className="page-title">Registered Users</h1>

      <table className="user-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Contact</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>

          {users.length === 0 ? (

            <tr>
              <td colSpan="6">No registrations found</td>
            </tr>

          ) : (

            users.map((user) => (

              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.contactNo}</td>
                <td>{user.location}</td>
              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

};

export default UserList;