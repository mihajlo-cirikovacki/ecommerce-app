import Product from "./Product";
import classes from "./ProductsList.module.css";

function ProductsList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map(product => {
        return ( 
          <Product 
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            description={product.description}
            rating={product.rating.rate}
          />
        )
      })}
    </ul>
  )
}

export default ProductsList;












