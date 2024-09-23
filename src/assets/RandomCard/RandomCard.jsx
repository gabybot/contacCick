import PropTypes from 'prop-types';
import styles from './RandomCard.module.css';

export default function RandomCard({ onClick, cardNumber, value, used, available }) {
  return (
    <div
      className={`${styles.card} ${used ? styles.used : ''} ${!available ? styles.unavailable : ''}`}
      onClick={onClick}
      style={{ pointerEvents: used || !available ? 'none' : 'auto' }} 
    >
      <p>Carta {cardNumber}</p>
      {used ? <p>{value > 0 ? `+${value}` : value}</p> : <p>{available ? '¿Fortuna?' : 'Activar: Agrega +50'}</p>}
    </div>
  );
}

RandomCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  cardNumber: PropTypes.number.isRequired,
  value: PropTypes.number,
  used: PropTypes.bool.isRequired,
  available: PropTypes.bool.isRequired,
};
