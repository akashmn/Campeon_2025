import { useState, useEffect } from 'react';
import styles from '../styles/Countdown.module.css';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className={styles.countdownItem}>
          <div className={styles.number}>{String(value).padStart(2, '0')}</div>
          <div className={styles.label}>{unit}</div>
        </div>
      ))}
    </div>
  );
}
