import { createContext, useState, useEffect } from "react";


const ProductsContext = createContext({
  productsInShop: [],
  totalProducts: 0,
  addProductsInShop: product => {}, // Better auto-completion
  removeProduct: product => {}, 
  productIsInShop: productId => {}, 
});


export function ProductsContextProvider(props) {
  // ==== State:
  const [inShop, setProductInShop]  = useState([]);
  
  // ==== Check for local storage:
  useEffect(()=> {
    const products = localStorage.getItem('products')
    if(products) setProductInShop(JSON.parse(products))
  }, []);
  
  // ==== Add to local storage:
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(inShop));
  })

  // ==== Functions:
  function addProductsInShop(product) {
    setProductInShop(prevProduct => prevProduct.concat(product));
  }

  function removeProduct(productId) {;
    setProductInShop(prevProduct => prevProduct.filter(prevProduct => prevProduct.id !== productId));
  }

  function productIsInShop(productId) {
    return inShop.some(product => product.id === productId);
  }

  // ==== Data and Functions for expose:
  const context = {
    // Data:
    productsInShop: inShop,
    totalProducts: inShop.length,
    // Functions:
    addProductsInShop: addProductsInShop,
    removeProduct: removeProduct,
    productIsInShop: productIsInShop,
  }

  return (
    <ProductsContext.Provider value= {context}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext;

