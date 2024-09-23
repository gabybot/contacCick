import PropTypes from 'prop-types';
import styles from './ControlButtons.module.css';

export default function ControlButtons({ onIncrease, onDecrease, onReset }) {
  return (
    <div className={styles.buttons}>
      <button className={styles.increaseButton} onClick={onIncrease}>
        Aumentar
      </button>
      <button className={styles.decreaseButton} onClick={onDecrease}>
        Disminuir
      </button>
      <button className={styles.resetButton} onClick={onReset}>
        Reiniciar
      </button>
    </div>
  );
}


ControlButtons.propTypes = {
  onIncrease: PropTypes.func.isRequired, 
  onDecrease: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,   
};
