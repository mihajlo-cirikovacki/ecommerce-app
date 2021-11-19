import { useEffect, useState } from 'react';
import classes from './ProductsInShop.module.css';


function ProductsInShop(props) {
  // ========== State:
  const [totalPriceSt, setTotalPriceSt]  =  useState(0);

  useEffect(() => {
    const total = props.products.productsInShop.reduce((acc, curr) => acc + curr.price * curr.quantity, totalPriceSt);
    setTotalPriceSt(total);
  }, [])

  // ========== Functons:
  // Remove Product:
  function removerCard(e) {
    const id = +e.target.dataset.id;
    const product = props.products.productsInShop.filter(product => product.id === id); // Trenutni object.
    const total = props.products.productsInShop.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const newTotal = total - product[0].price * product[0].quantity;
    setTotalPriceSt(newTotal.toFixed(2));
    props.products.removeProduct(id); 
  }; 

  // Add Quantity:
  function addQ(e) {
    const id = +e.target.dataset.id;
    const exist = props.products.productsInShop.filter(product => product.id === id);
    if(exist) {
      const [product] = exist;
      product.quantity++;
      const total = props.products.productsInShop.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      setTotalPriceSt(total.toFixed(2))
    }
  };

  // Subtract Quantity:
  function removeQ(e) {
    const id = +e.target.dataset.id;
    const exist = props.products.productsInShop.filter(product => product.id === id);
    if(exist && exist[0].quantity !== 1) {
      const [product] = exist;
      product.quantity--;
      const total = props.products.productsInShop.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      setTotalPriceSt( total.toFixed(2));
    } else return;
  }
  
  return (
    <section className={classes.container}>
      {props.products.productsInShop.map((product, index) => { 
          return (
              <div key={index} data-id={product.id} className={classes.shopcard}>
                <span className={classes.close} data-id={product.id} onClick={removerCard}>X</span>
                <div className={classes.imagebox}>
                  <img src={product.img} alt={product.title} className={classes.image}></img> 
                </div>
                <div className={classes.info}>
                  <div>
                    <h3 className={classes.title}>{product.title}</h3>
                    <p className={classes.price}>{product.price} $</p>
                  </div>
                  <div className={classes.addRemoveBox} >
                    <button className={classes.addRemoveBtn} data-id={product.id} onClick={addQ}><ion-icon data-id={product.id} className={classes.icon} name="add-outline"></ion-icon></button>
                    <span className={classes.quantity}>{product.quantity}</span>
                    <button className={classes.addRemoveBtn} data-id={product.id} onClick={removeQ}><ion-icon data-id={product.id} className={classes.icon} name="remove-outline"></ion-icon></button>
                  </div>
                </div>
              </div>
            )
        })
      } 
      <div className={classes.total}>Total: {totalPriceSt}$</div>
    </section>
  )
}

export default ProductsInShop;










