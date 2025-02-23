import { Link } from "react-router-dom";
import { Trophy, Mail, Phone, MapPin } from "lucide-react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          {/* Logo Section */}
          <div>
            <div className={styles.logoSection} data-aos="fade-up">
              <Trophy size={28} className={styles.trophy} />
              <span className={styles.logoText}>CAMPEON</span>
            </div>
            <p
              className={styles.logoDesc}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The ultimate intercollege sports tournament bringing together
              talent and competition.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.footerLinks}>
            {["Home", "Events", "About", "Leaderboard", "FAQ"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={styles.footerLink}
                //animations
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Contact Information */}
          <div
            className={styles.contactInfo}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 data-aos="fade-up" data-aos-delay="200">
              Contact Us
            </h3>
            <div
              className={styles.contactItem}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Mail size={14} className={styles.contactIcon} />
              <span>contact@campeon.com</span>
            </div>
            <div
              className={styles.contactItem}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Phone size={14} className={styles.contactIcon} />
              <span>+91 123 456 7890</span>
            </div>
            <div
              className={styles.contactItem}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <MapPin size={14} className={styles.contactIcon} />
              <span>Main Stadium, Sports Complex, Kerala</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyright}>
          © {currentYear} <span>CAMPEON</span> • All rights reserved
        </div>
      </div>
    </footer>
  );
}
