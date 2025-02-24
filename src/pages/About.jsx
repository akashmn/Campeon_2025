import { Trophy, Users, Medal, Target, Calendar, MapPin } from "lucide-react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>About CAMPION</h1>

        <div className={styles.highlightSection}>
          <p className={styles.cardText}>
            CAMPION is Kerala's premier inter-college sports tournament,
            bringing together athletic talent from across the state in a
            celebration of sportsmanship, competition, and excellence.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Colleges</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Sports</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Athletes</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>₹1L+</div>
              <div className={styles.statLabel}>Prize Pool</div>
            </div>
          </div>
        </div>

        <div className={styles.grid}></div>
        <div className={styles.card}>
          <Trophy className={styles.cardIcon} size={32} />
          <h3 className={styles.cardTitle}>Excellence</h3>
          <p className={styles.cardText}>
            Showcasing the highest level of collegiate sports competition with
            state-of-the-art facilities and professional organization.
          </p>
        </div>

        <div className={styles.card}>
          <Users className={styles.cardIcon} size={32} />
          <h3 className={styles.cardTitle}>Community</h3>
          <p className={styles.cardText}>
            Building lasting connections between colleges and athletes,
            fostering a spirit of healthy competition and camaraderie.
          </p>
        </div>

        <div className={styles.card}>
          <Medal className={styles.cardIcon} size={32} />
          <h3 className={styles.cardTitle}>Achievement</h3>
          <p className={styles.cardText}>
            Recognizing and rewarding outstanding athletic performance across
            multiple sports disciplines.
          </p>
        </div>

        <div className={styles.card}>
          <Target className={styles.cardIcon} size={32} />
          <h3 className={styles.cardTitle}>Vision</h3>
          <p className={styles.cardText}>
            Becoming the benchmark for collegiate sports events in India,
            inspiring the next generation of athletes.
          </p>
        </div>

        <div className={styles.card}>
          <Calendar className={styles.cardIcon} size={32} />
          <h3 className={styles.cardTitle}>History</h3>
          <p className={styles.cardText}>
            Established with a vision to create a platform for collegiate
            athletes to showcase their talents at a professional level.
          </p>
        </div>

        <div className={styles.card}>
          <MapPin className={styles.cardIcon} size={32} />
          <h3 className={styles.cardTitle}>Venue</h3>
          <p className={styles.cardText}>
            Hosted at world-class facilities across Kerala, providing the
            perfect stage for exceptional sporting moments.
          </p>
        </div>
      </div>
    </div>
  );
}
