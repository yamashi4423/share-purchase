import { useState } from 'react';
import './App.css';
import Products from './components/Products';

function App() {
  const [products, setProducts] = useState([{id: "ID", name: "yakisoba", price: 0, check: false}]);

  return (
    <div className="wrapper">
      <div className="header">

      </div>
      <div className="main">
        <Products products={products} setProducts={setProducts}/>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
