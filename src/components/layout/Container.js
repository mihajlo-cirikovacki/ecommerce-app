import MainNavigation from "./MainNavigation";
import classes from "./Container.module.css";

function Container(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Container;









