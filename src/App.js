import { Card } from "./components/Card"; // Certifique-se de importar o componente Card
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              title="Card title"
              image="https://via.placeholder.com/150"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title"
              image="https://via.placeholder.com/150"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title"
              image="https://via.placeholder.com/150"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
