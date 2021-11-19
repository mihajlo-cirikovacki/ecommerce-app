import { useState ,useEffect} from "react";
import CategoryBtns from "../components/category-btns";
import Loader from "../components/Loader";
import ProductsList from "../components/ProductsList";

function AllProducts() {
  // === States:
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [productsLoaded, setLoadedProducts] = useState([]);

  // === Get Data:
  useEffect(() => {
    setIsLoading(true);

    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setIsLoading(false);
      category === '' ? setLoadedProducts(data) : setLoadedProducts(data.filter(product => product.category === category)) 
    }); 
  }, [category])

  // ================== Functions:
  // Get Category:
  function getCategoryProducts() {
    const filteredArticles = productsLoaded.filter(product => product.category === category);
    setLoadedProducts(filteredArticles);
  }

  // Ascending order:
  function getAscendingOrder() {
    const ascending = [...productsLoaded].sort((a, b) => a.price - b.price);
    setLoadedProducts(ascending); 
  }

  // Deascending order:
  function getDeascendingOrder() {
    const deascending = [...productsLoaded].sort((a, b) => b.price - a.price);
    setLoadedProducts(deascending); 
  }

  return isLoading ? <section><Loader /></section> : 
  <section>
    <CategoryBtns
      getCategoryProducts={getCategoryProducts}
      setCategory={setCategory}
      ascendingOrder={getAscendingOrder}
      deascendingOrder={getDeascendingOrder}
    />
    <ProductsList products={productsLoaded} />
    {}
  </section>
}

export default AllProducts;

