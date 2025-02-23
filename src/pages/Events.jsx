import styles from '../styles/Events.module.css';
import { Link } from 'react-router-dom';

const eventsData = [
  {
    id: 1,
    name: "7's Football",
    details: "High-intensity seven-a-side football tournament featuring knockout rounds and a grand finale.",
    date: "March 20-22, 2025",
    venue: "Main Ground"
  },
  {
    id: 2,
    name: "County Cricket",
    details: "T20 format cricket tournament with teams representing different colleges competing for the championship.",
    date: "March 21-23, 2025",
    venue: "Cricket Stadium"
  },
  {
    id: 3,
    name: "Table Tennis",
    details: "Singles and doubles tournaments with elimination rounds leading to the finals.",
    date: "March 20-21, 2025",
    venue: "Indoor Sports Complex"
  },
  {
    id: 4,
    name: "Volleyball",
    details: "Inter-college volleyball championship with group stages and knockout rounds.",
    date: "March 22-23, 2025",
    venue: "Volleyball Court"
  }
];

export default function Events() {
  return (
    <div className={styles.eventsContainer}>
      <h1 className={styles.title}>Tournament Events</h1>
      <div className={styles.eventsGrid}>
        {eventsData.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <h2 className={styles.eventName}>{event.name}</h2>
            <p className={styles.eventDate}>{event.date} | {event.venue}</p>
            <p className={styles.eventDetails}>{event.details}</p>
            <Link to={`/events/${event.id}`} className={styles.registerButton}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
