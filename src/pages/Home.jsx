import Countdown from "../components/Countdown";
import FAQ from "../components/FAQ";
import LatestUpdates from "../components/notification";
import styles from "../styles/Home.module.css";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.grid3d}>
          {[...Array(20)].map((_, i) => (
            <div
              key={`h${i}`}
              className={styles.gridLine}
              style={{ top: `${i * 5}%` }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`v${i}`}
              className={styles.gridLineVertical}
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.title}>CAMPION</h1>
          <p className={styles.subtitle}>INTERCOLLEGE SPORTS TOURNAMENT</p>
          <Countdown targetDate="2025-03-20T00:00:00" />
        </div>
      </div>
      <About />
      {/* <LatestUpdates/> */}
      <FAQ />
    </>
  );
}
