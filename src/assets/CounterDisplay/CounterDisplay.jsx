import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CounterDisplay.module.css';

export default function CounterDisplay({ count }) {
  const [bounce, setBounce] = useState(false);

  
  useEffect(() => {
    if (count !== 0 && count % 50 === 0) {
      setBounce(true);
      const timer = setTimeout(() => {
        setBounce(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  const getColorClass = () => {
    if (count > 10) return styles.green;
    if (count < 0) return styles.red;
    return styles.rainbow;
  };

  return (
    <div className={styles.counter}>
      <p className={`${styles.countText} ${getColorClass()} ${bounce ? styles.bounce : ''}`}>
        {count}
      </p>
    </div>
  );
}


CounterDisplay.propTypes = {
  count: PropTypes.number.isRequired,
};
