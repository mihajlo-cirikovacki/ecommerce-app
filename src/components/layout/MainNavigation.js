
import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductsContext from "../../store/product-context";

function MainNavigation() {
  // Product Context:
  const productContext = useContext(ProductsContext);
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to='/'>eCommerce website</Link></div>
      <nav className={classes.nav}>
        <ul >
          <li><Link to='/'>All Products</Link></li>
          <li><Link to='/shoping-card'>Shoping card</Link></li>
        </ul>
        <span className={classes.span}>({productContext.totalProducts})</span>
      </nav>
    </header>
  );
}

export default MainNavigation;









