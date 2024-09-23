import { useState } from 'react';
import CounterDisplay from './assets/CounterDisplay/CounterDisplay.jsx';
import ControlButtons from './assets/ControlButtons/ControlButtons.jsx';
import RandomMode from './assets/RandomMode/RandomMode.jsx';
import styles from './ClickCounter.module.css';

export default function ClickCounter() {
  const [count, setCount] = useState(0);


  const handleIncrease = () => setCount(count + 1);

  
  const handleDecrease = () => setCount(count - 1);

 
  const handleReset = () => setCount(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Click Counter</h1>

      {/* Mostrar el contador */}
      <CounterDisplay count={count} />

     
      <ControlButtons 
        onIncrease={handleIncrease} 
        onDecrease={handleDecrease} 
        onReset={handleReset} 
      />

      
      <RandomMode count={count} setCount={setCount} />
    </div>
  );
}
