import './App.css';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import ProductView from './components/ProductView';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/view/:id" element={<ProductView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
