import { useParams } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Medal,
  Share2,
} from "lucide-react";
import styles from "../styles/IndiviEvent.module.css";

const eventsData = [
  {
    id: 1,
    name: "7's Football",
    details:
      "High-intensity seven-a-side football tournament featuring knockout rounds and a grand finale.",
    date: "March 8-9, 2025",
    venue: "Main Ground",
    image: "/images/football.jpeg",
    teamSize: "7 players + 3 substitutes",
    prizePool: "₹8,000",
    schedule: "9:00 AM - 6:00 PM",
    description:
      "Experience the thrill of fast-paced football action in our prestigious 7's tournament. Teams will compete in a knockout format, showcasing their skills and tactical prowess. With shorter halves and a smaller field, expect intense matches and spectacular goals.",
    rules: [
      "7 players per side on field",
      "20 minutes per half",
      "Rolling substitutions allowed",
      "Direct elimination format",
      "Standard FIFA rules apply",
    ],
    registrationLink:"https://forms.gle/V5oEdcvmQHmXVQGS9"
  },
  {
    id: 2,
    name: "County Cricket",
    details:
      "T20 format cricket tournament with teams representing different colleges.",
    date: "March 8-9, 2025",
    venue: "Cricket Stadium",
    image: "/images/cricket.png",
    teamSize: "11 players + 3 substitutes",
    prizePool: "₹8,000",
    schedule: "8:00 AM - 7:00 PM",
    description:
      "Join us for an action-packed cricket tournament where colleges battle for supreme cricket glory. Experience the excitement of quick-fire batting, tactical bowling, and electric fielding performances.",
    rules: [
      "5-OVER MATCH",
      "SLOW BOWLING WITHOUT RUN-UP",
      "BATSMAN CAN APPEAL FOR SPEEDBALL",
      "SIX IS OUT",
      "SIX IN NO-BALL IS OUT",
      "FREE HIT WILL NOT BE AWARDED FOR NO-BALL",
      "NO LBW",
      "OVERTHROW ALLOWED",
      "NO BYES",
      "MAXIMUM 2 OVERS CAN BE BOWLED BY A BOWLER",
      "CHUCKING RESULTS IN NO-BALL",
      "UMPIRES DECISION IS FINAL",
    ],
    registrationLink:"https://bit.ly/Cricket_campeon"
  },
  // {
  //   id: 3,
  //   name: "Table Tennis",
  //   details:
  //     "Singles and doubles tournaments with elimination rounds leading to the finals.",
  //   date: "March 20-21, 2025",
  //   venue: "Indoor Sports Complex",
  //   image:
  //     "https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1470&h=800",
  //   teamSize: "Singles (1) or Doubles (2)",
  //   prizePool: "₹25,000",
  //   schedule: "10:00 AM - 5:00 PM",
  //   description:
  //     "Test your skills in this fast-paced table tennis tournament. Both singles and doubles categories available. Players will compete in a series of matches showcasing precision, reflexes, and tactical gameplay.",
  //   rules: [
  //     "ITTF rules apply",
  //     "11 points per game",
  //     "Best of 5 games",
  //     "Players must bring own rackets",
  //     "White playing attire mandatory",
  //   ],
  // },
  {
    id: 4,
    name: "Volleyball",
    details:
      "Inter-college volleyball championship with group stages and knockout rounds.",
    date: "March 8-9, 2025",
    venue: "Volleyball Court",
    image: "/images/vollyball.jpeg",
    teamSize: "6 players + 4 substitutes",
    prizePool: "₹6,000",
    schedule: "9:00 AM - 6:00 PM",
    description:
      "Join the excitement of competitive volleyball where teams battle for supremacy. Experience powerful spikes, strategic plays, and amazing teamwork in this high-energy tournament.",
    rules: [
      "A team should minimum consist of 8 players (5+3) to a maximum of 12 players",
      "Players must bring their college ID for verification",
      "Teams should report at the venue at 9:00am, late teams will be disqualified",
      "The tournament will be conducted under knock-out basis",
      "Decisions taken by the event committee and the referees will be final",
    ],
    registrationLink: "https://bit.ly/campeonvolleyball"
  },
  {
    id: 5,
    name: "Basketball",
    details:
      "Fast-paced basketball tournament featuring 5v5 matches with group stages and playoffs.",
    date: "March 8-9, 2025",
    venue: "Basketball Court",
    image: "/images/basketBall.jpeg",
    teamSize: "5 players + 3 substitutes",
    prizePool: "₹7,000",
    schedule: "10:00 AM - 7:00 PM",
    description:
      "Experience high-energy basketball action in this competitive tournament. Teams will showcase their skills in fast breaks, precision shooting, and defensive strategies.",
    rules: [
      "FIBA rules apply",
      "10-minute quarters",
      "Shot clock of 24 seconds",
      "Teams must wear matching jerseys",
      "Maximum 5 team fouls per quarter",
    ],
    registrationLink: "https://bit.ly/Basketballcampeon"
    },
    {
    id: 6,
    name: "Chess",
    details:
      "Strategic chess competition with classical format matches and timed rounds.",
    date: "March 8-9, 2025",
    venue: "Indoor Sports Complex",
    image: "/images/chess1.png", // or chess2.png - you can choose which one to use
    teamSize: "Individual",
    prizePool: "₹2,500",
    schedule: "9:00 AM - 4:00 PM",
    description:
      "Test your strategic thinking in this classical chess tournament. Players will compete in a series of matches, demonstrating their tactical prowess and endgame skills.",
    rules: [
      "FIDE rules apply",
      "90 minutes per player",
      "30 seconds increment per move",
      "Notation mandatory",
      "Zero tolerance for late arrival",
    ],
    registrationLink:"https://bit.ly/QG_Chess"
    },
    {
      id: 7,
      name: "Badminton", 
      details: "Singles and doubles badminton tournament with knockout format matches.",
      date: "March 8-9, 2025",
      venue: "Indoor Sports Complex",
      image: "/images/badminton.jpg",
      teamSize: "Minimum 4, Maximum 5 players",
      prizePool: "₹8,000",
      schedule: "8:00 AM - 5:00 PM",
      description: "Compete in this thrilling badminton tournament featuring both singles and doubles categories. Players will showcase their agility, precision, and tactical gameplay.",
      rules: [
        "A team should consist of minimum 4 players to maximum 5 players",
        "Only one player from the team is allowed to play in two matches",
        "Game will be 2 sets: first singles, doubles, then reverse doubles if draw",
        "Players must bring college ID for verification",
        "Yonex mavis 350 shuttle will be used",
        "Teams should report at venue at 8:00am",
        "Tournament conducted under knock-out basis",
        "Event committee/referee decisions are final"
      ],
      registrationLink:"https://bit.ly/Campeon_badminton"
    }
];

export default function IndiviEvent() {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) return <div>Event not found</div>;

  return (
    <>
      <div className={styles.eventContainer}>
        <div
          className={styles.heroSection}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${event.image})` }}
        >
          <h1>{event.name}</h1>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.eventInfo}>
            <div
              className={styles.infoCard}
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Calendar className={styles.icon} />
              <span>{event.date}</span>
            </div>
            <div
              className={styles.infoCard}
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <MapPin className={styles.icon} />
              <span>{event.venue}</span>
            </div>
            <div
              className={styles.infoCard}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Users className={styles.icon} />
              <span>{event.teamSize}</span>
            </div>
            <div
              className={styles.infoCard}
              data-aos="fade-left"
              data-aos-delay="250"
            >
              <Trophy className={styles.icon} />
              <span>{event.prizePool}</span>
            </div>
            <div
              className={styles.infoCard}
              data-aos="fade-left"
              data-aos-delay="300"
            >
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
            {event.registrationLink ? (
              <a 
                href={event.registrationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Register Now
                <Share2 size={18} />
              </a>
            ) : (
              <>
                Register Now
                <Share2 size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
