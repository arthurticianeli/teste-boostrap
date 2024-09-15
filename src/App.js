import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { ServiceConfig } from "./services/ServiceConfig";

function App() {
  const serviceConfig = new ServiceConfig();

  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await serviceConfig.get("/posts");
      const data = response.data;
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <Card title={post.title} text={post.body} image={post.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
