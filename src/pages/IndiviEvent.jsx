import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Trophy, Clock, Medal, Share2 } from 'lucide-react';
import styles from '../styles/IndiviEvent.module.css';

const eventsData = [
  {
    id: 1,
    name: "7's Football",
    details: "High-intensity seven-a-side football tournament featuring knockout rounds and a grand finale.",
    date: "March 20-22, 2025",
    venue: "Main Ground",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1470&h=800",
    teamSize: "7 players + 3 substitutes",
    prizePool: "₹50,000",
    schedule: "9:00 AM - 6:00 PM",
    description: "Experience the thrill of fast-paced football action in our prestigious 7's tournament. Teams will compete in a knockout format, showcasing their skills and tactical prowess. With shorter halves and a smaller field, expect intense matches and spectacular goals.",
    rules: [
      "7 players per side on field",
      "20 minutes per half",
      "Rolling substitutions allowed",
      "Direct elimination format",
      "Standard FIFA rules apply"
    ]
  },
  {
    id: 2,
    name: "County Cricket",
    details: "T20 format cricket tournament with teams representing different colleges.",
    date: "March 21-23, 2025",
    venue: "Cricket Stadium",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1470&h=800",
    teamSize: "11 players + 4 substitutes",
    prizePool: "₹75,000",
    schedule: "8:00 AM - 7:00 PM",
    description: "Join us for an action-packed T20 cricket tournament where colleges battle for supreme cricket glory. Experience the excitement of quick-fire batting, tactical bowling, and electric fielding performances.",
    rules: [
      "20 overs per innings",
      "Power play regulations apply",
      "DLS method for rain interruptions",
      "ICC standard playing conditions",
      "College ID mandatory"
    ]
  },
{
    id: 3,
    name: "Table Tennis",
    details: "Singles and doubles tournaments with elimination rounds leading to the finals.",
    date: "March 20-21, 2025",
    venue: "Indoor Sports Complex",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1470&h=800",
    teamSize: "Singles (1) or Doubles (2)",
    prizePool: "₹25,000",
    schedule: "10:00 AM - 5:00 PM",
    description: "Test your skills in this fast-paced table tennis tournament. Both singles and doubles categories available. Players will compete in a series of matches showcasing precision, reflexes, and tactical gameplay.",
    rules: [
      "ITTF rules apply",
      "11 points per game",
      "Best of 5 games",
      "Players must bring own rackets",
      "White playing attire mandatory"
    ]
  },
  {
    id: 4,
    name: "Volleyball",
    details: "Inter-college volleyball championship with group stages and knockout rounds.",
    date: "March 22-23, 2025",
    venue: "Volleyball Court",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=1470&h=800",
    teamSize: "6 players + 4 substitutes",
    prizePool: "₹40,000",
    schedule: "9:00 AM - 6:00 PM",
    description: "Join the excitement of competitive volleyball where teams battle for supremacy. Experience powerful spikes, strategic plays, and amazing teamwork in this high-energy tournament.",
    rules: [
      "FIVB rules apply",
      "25 points per set",
      "Best of 3 sets",
      "Teams must wear matching uniforms",
      "Maximum 2 timeouts per set"
    ]
  }
];

export default function IndiviEvent() {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === parseInt(id));

  if (!event) return <div>Event not found</div>;

  return (
    <>
      <div className={styles.eventContainer}>
        <div className={styles.heroSection} style={{ backgroundImage: `url(${event.image})` }}>
          <h1>{event.name}</h1>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.eventInfo}>
            <div className={styles.infoCard}>
              <Calendar className={styles.icon} />
              <span>{event.date}</span>
            </div>
            <div className={styles.infoCard}>
              <MapPin className={styles.icon} />
              <span>{event.venue}</span>
            </div>
            <div className={styles.infoCard}>
              <Users className={styles.icon} />
              <span>{event.teamSize}</span>
            </div>
            <div className={styles.infoCard}>
              <Trophy className={styles.icon} />
              <span>{event.prizePool}</span>
            </div>
            <div className={styles.infoCard}>
              <Clock className={styles.icon} />
              <span>{event.schedule}</span>
            </div>
          </div>

          <div className={styles.description}>
            <h2>About the Event</h2>
            <p>{event.description}</p>
          </div>

          <div className={styles.rules}>
            <h2>Tournament Rules</h2>
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index}>
                  <Medal className={styles.ruleIcon} size={16} />
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <button className={styles.registerBtn}>
            Register Now
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
