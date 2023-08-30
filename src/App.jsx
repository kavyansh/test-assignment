import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="main__header">
          <h1 className="first-heading">Featured Products</h1>
          <p className="main__text">
            Explore and discover a variety of products
          </p>
        </div>
        <Carousel />
      </main>
    </div>
  );
}

export default App;
