import { useEffect, useState } from "react";

function ApiDemo() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch("https://dummy-json.mock.beeceptor.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));

  }, []);

  return (

    <div className="container">

      <h2>API Demo</h2>

      {posts.map((p) => (

        <div key={p.id} className="card">
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>

      ))}

    </div>

  );

}

export default ApiDemo;