import { Route, Routes } from 'react-router-dom';

// Import Pages:
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import ProductShopingCard from './pages/ProductShopingCard';

// Import Wraper Container:
import Container from './components/layout/Container';

function App() {
  return (
    <div> 
      <Container>
        <Routes>
          <Route path="/" element={<AllProducts />}></Route>
          <Route path="/details" element={<ProductDetails />}></Route>
          <Route path="/shoping-card" element={<ProductShopingCard />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
