import classes from "./ProductDetails.module.css";

function ProductDetails(props) {

  return (
    <section className={classes.modal}>
      <span className={classes.close} onClick={props.close}>X</span>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={props.product.image} alt={props.product.title}></img>
        </div>
        <div className={classes.content}>
          <div className={classes.titlebox}>
            <h2>{props.product.title}</h2>
            <span>(Rating: {props.product.rating})</span>
          </div>
          <p className={classes.description} >{props.product.description}</p>
          <div className={classes.conteiner}>
            <p>{props.product.category}</p>
            <p className={classes.price}>{props.product.price}<span>$</span></p>
          </div>
          <button className={classes.btn} onClick={props.toogleAddOrRemove}>
            {props.productIsInShop ? 'Remove from shop' : 'Add to shop'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;




