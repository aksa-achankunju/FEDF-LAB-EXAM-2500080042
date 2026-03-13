import { useEffect, useState } from "react";

function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("users")) || [];

    setUsers(data);

  }, []);

  return (

    <div className="container">

      <h2>Registered Users</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>City</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>

          {users.map((u, index) => (

            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.age}</td>
              <td>{u.city}</td>
              <td>{u.course}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default UserList;