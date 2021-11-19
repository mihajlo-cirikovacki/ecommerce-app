import { useContext } from 'react';
import ProductsContext from "../store/product-context";

import ProductsInShop from "../components/ProductsInShop";
import classes from './ProductShopingCard.module.css'


function ProductShopingCard() {
  // ====== Product Context:
  const productContext = useContext(ProductsContext);

  // ====== Check for Context:
  if(productContext.totalProducts === 0) return  <section><p className={classes.shopempty}>Shop card is empty</p></section>;
  if(productContext.totalProducts !== 0) return  <section><ProductsInShop products={productContext} /></section>
  
}

export default ProductShopingCard;









