import classes from './Category-btns.module.css';


function CategoryBtns(props) {

  const categoryChange = (e)=> {
    const {textContent} = e.target; 
    if(textContent === 'All') {
      props.setCategory('')
    } else {
      props.getCategoryProducts(); 
      props.setCategory(textContent.toLowerCase()); 
    } 
  }
  
  return (
    <section>
      <section className={classes.section}>
        <div className={classes.buttons}>
        <button className={classes.btn} onClick={categoryChange}>All</button>
        <button className={classes.btn} onClick={categoryChange}>Electronics</button>
        <button className={classes.btn} onClick={categoryChange}>Jewelery</button>
        <button className={classes.btn} onClick={categoryChange}>Men's clothing</button>
        <button className={classes.btn} onClick={categoryChange}>Women's clothing</button>
        </div>
        <div className={classes.sort}>
        <p>Sort by price:</p>
        <button className={classes.btn} onClick={props.ascendingOrder}>Low-High</button>
        <button className={classes.btn} onClick={props.deascendingOrder}>High-low</button>
        </div>
      </section>
    </section>
  )
}

export default CategoryBtns;









