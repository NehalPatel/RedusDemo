import './App.css';
import Cart from './components/cart.component';
import Product from './components/product.component';
import products from "./products.json";

function App() {
  return (
    <div className="App container">
      <Cart />
      <div className="products">
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
