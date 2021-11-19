
import { useState, useContext } from "react";
import ProductDetails from "../pages/ProductDetails";
import Backdrop from "./layout/Backdrop";
import classes from "./Product.module.css";
import ProductsContext from "../store/product-context";
import AddToCardModal from "./AddToCardModal";

function Product(props) {
  // === State for Details modal:
  const [detailsIsOpen, setDetails] = useState(false);
  const [modalIsOpen, setModal] = useState(false);
  
  // === Modal handlers:
  // Details:
  function getDetails()  {
    setDetails(true);
  }

  function closeDetails() {
    setDetails(false); 
  }

  // Modal:
  function getModal() {
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }

  // Product Context:
  const productContext = useContext(ProductsContext);

  const productIsInShop = productContext.productIsInShop(props.id);
  
  function toogleAddOrRemove() {
    // Check if product is in shop?
    if (productIsInShop) {
      productContext.removeProduct(props.id);
    } else {
      productContext.addProductsInShop({
        img: props.image,
        title: props.title,
        price: props.price,
        id: props.id,
        quantity: 1,
      })
      // Get Modal:
      getModal();
    }
  }

  return (
    <li className={classes.card}>  
      <div className={classes.image} onClick={getDetails}>
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <div className={classes.conteiner}>
          <p>{props.category}</p>
          <p className={classes.price}>{props.price}<span>$</span></p>
        </div>
        <button className={classes.btn} onClick={toogleAddOrRemove}>
        {productIsInShop ? 'Remove from shop' : 'Add to shop'}
        </button>
        
        {detailsIsOpen && <ProductDetails 
          productIsInShop={productIsInShop} 
          toogleAddOrRemove={toogleAddOrRemove} 
          product={props} 
          close={closeDetails}/>}
        {detailsIsOpen && <Backdrop close={closeDetails} />}

        {modalIsOpen && <AddToCardModal closeModal={closeModal} productName={props.title} />}
        {modalIsOpen && <Backdrop />}
      </div>
    </li>
  )
}

export default Product;








