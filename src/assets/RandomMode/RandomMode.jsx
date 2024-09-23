import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FaRedo } from 'react-icons/fa';
import RandomCard from '../RandomCard/RandomCard';
import styles from './RandomMode.module.css';

export default function RandomMode({ count, setCount }) {
  const [usedCards, setUsedCards] = useState([false, false, false]);
  const [cardValues, setCardValues] = useState([null, null, null]);
  const [availableCards, setAvailableCards] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    if (count > 0 && count % 50 === 0 && availableCards < 3) {
      setAvailableCards(availableCards + 1);
    }
  }, [count, availableCards]);

  useEffect(() => {
    if (timeLeft > 0 && timerStarted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, timerStarted]);

  const handleCardClick = (index) => {
    if (usedCards[index] || index >= availableCards || gameOver) return;

    const randomValue = Math.floor(Math.random() * 101) - 50;
    setCount(count + randomValue);

    const newUsedCards = [...usedCards];
    newUsedCards[index] = true;
    setUsedCards(newUsedCards);

    const newCardValues = [...cardValues];
    newCardValues[index] = randomValue;
    setCardValues(newCardValues);
  };

  const startGame = (duration) => {
    setTotalTime(duration);
    setTimeLeft(duration * 60);
    setTimerStarted(true);
    setGameOver(false);
    setCount(0);
    setUsedCards([false, false, false]);
    setCardValues([null, null, null]);
    setAvailableCards(1);
  };

  const handleReset = () => {
    setTimerStarted(false);
    setGameOver(false);
    setTimeLeft(null);
    setCount(0);
    setUsedCards([false, false, false]);
    setCardValues([null, null, null]);
    setAvailableCards(1);
  };

  return (
    <div className={styles.randomCards}>
      {!timerStarted ? (
        <div className={styles.startOptions}>
          <h2>Elige una duración:</h2>
          <button onClick={() => startGame(1)}>Juego Rápido (1 min)</button>
          <button onClick={() => startGame(3)}>Juego Medio (3 min)</button>
          <button onClick={() => startGame(5)}>Juego Largo (5 min)</button>
        </div>
      ) : (
        <div className={styles.gameArea}>
          <div className={styles.timerContainer}>
            <div className={styles.timer}>
              {`Tiempo restante: ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}
            </div>
            <button className={styles.resetButton} onClick={handleReset}>
              <FaRedo size={20} />
            </button>
          </div>
          <div className={styles.cardContainer}>
            {[1, 2, 3].map((num, index) => (
              <RandomCard
                key={index}
                cardNumber={num}
                onClick={() => handleCardClick(index)}
                value={cardValues[index]}
                used={usedCards[index]}
                available={index < availableCards}
              />
            ))}
          </div>
          {gameOver && (
            <div className={styles.gameOverMessage}>
              <h2>¡Felicidades!</h2>
              <p>{`Hiciste ${count} clics en ${totalTime} minutos`}</p>
              <button onClick={handleReset}>Reiniciar juego</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

RandomMode.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
