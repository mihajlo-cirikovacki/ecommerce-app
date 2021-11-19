
import classes from './AddToCardModal.module.css';
import { useNavigate } from 'react-router-dom';

function AddToCardModal(props) {
  const navigate = useNavigate();

  // === Functions:
  function goToShopingCard() {
    navigate('/shoping-card')
  }

  return (
    <section className={classes.modalContainer}>
      <div className={classes.modal}>
        <div className={classes.modal__info}>
          <p className={classes.modal__title}>{props.productName}</p>
          <span>Successfully added to your cart!</span>
        </div>
        <div className={classes.modal__buttons}> 
          <button className={classes.btn} onClick={props.closeModal}>Close</button>
          <button className={classes.btn} onClick={goToShopingCard}>Go to Checkout</button>
        </div>
      </div>
    </section>
  )
}

export default AddToCardModal;










