import React, { useEffect, useState } from "react";

const ApiDemo = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch("https://dummy-json.mock.beeceptor.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("API Error:", error));

  }, []);

  return (

    <div className="container">

      <h1 className="page-title">API Demo Posts</h1>

      <table className="user-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Comments</th>
          </tr>
        </thead>

        <tbody>

          {posts.map((post) => (

            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.comment_count}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
};

export default ApiDemo;